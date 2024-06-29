import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Produto = {
  id: number;
  nome: string;
  imagem: any;
  valor: number;
};

type AppContextType = {
  userId: string | null;
  favoritos: Produto[];
  carrinho: Produto[];
  quantidades: number[];
  adicionarAosFavoritos: (produto: Produto) => void;
  adicionarAoCarrinho: (produto: Produto) => void;
  removerDoCarrinho: (produtoId: number) => void;
  removerDosFavoritos: (produtoId: number) => void;
  setQuantidades: React.Dispatch<React.SetStateAction<number[]>>;
  setCarrinho: React.Dispatch<React.SetStateAction<Produto[]>>;
  salvarEstado: () => void;
  carregarEstado: (userId: string) => void;
  logout: () => void;
  setUserId: React.Dispatch<React.SetStateAction<string | null>>;
};

export const AppContext = createContext<AppContextType>({
  userId: null,
  favoritos: [],
  carrinho: [],
  quantidades: [],
  adicionarAosFavoritos: () => {},
  adicionarAoCarrinho: () => {},
  removerDoCarrinho: () => {},
  removerDosFavoritos: () => {},
  setQuantidades: () => {},
  setCarrinho: () => {},
  salvarEstado: () => {},
  carregarEstado: () => {},
  logout: () => {},
  setUserId: () => {},
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [favoritos, setFavoritos] = useState<Produto[]>([]);
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const [quantidades, setQuantidades] = useState<number[]>([]);

  useEffect(() => {
    const fetchUserId = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      if (storedUserId) {
        setUserId(storedUserId);
        carregarEstado(storedUserId);
      }
    };

    fetchUserId();
  }, []);

  const salvarEstado = async () => {
    const userData = {
      favoritos,
      carrinho,
      quantidades,
    };
    if (userId) {
      await AsyncStorage.setItem(`userData_${userId}`, JSON.stringify(userData));
    }
  };

  const carregarEstado = async (userId: string) => {
    const jsonValue = await AsyncStorage.getItem(`userData_${userId}`);
    const userData = jsonValue != null ? JSON.parse(jsonValue) : null;
    if (userData) {
      setFavoritos(userData.favoritos);
      setCarrinho(userData.carrinho);
      setQuantidades(userData.quantidades);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('userId');
    setUserId(null);
    setFavoritos([]);
    setCarrinho([]);
    setQuantidades([]);
  };

  const adicionarAosFavoritos = (produto: Produto) => {
    if (!favoritos.find((item) => item.id === produto.id)) {
      const novosFavoritos = [...favoritos, produto];
      setFavoritos(novosFavoritos);
      salvarEstado();
    }
  };

  const adicionarAoCarrinho = (produto: Produto) => {
    const index = carrinho.findIndex((item) => item.id === produto.id);
    if (index === -1) {
      const novoCarrinho = [...carrinho, produto];
      const novasQuantidades = [...quantidades, 1];
      setCarrinho(novoCarrinho);
      setQuantidades(novasQuantidades);
      salvarEstado();
    } else {
      const newQuantidades = [...quantidades];
      newQuantidades[index] += 1;
      setQuantidades(newQuantidades);
      salvarEstado();
    }
  };

  const removerDoCarrinho = (produtoId: number) => {
    const index = carrinho.findIndex((item) => item.id === produtoId);
    if (index !== -1) {
      const novoCarrinho = carrinho.filter((item) => item.id !== produtoId);
      const novasQuantidades = quantidades.filter((_, i) => i !== index);
      setCarrinho(novoCarrinho);
      setQuantidades(novasQuantidades);
      salvarEstado();
    }
  };

  const removerDosFavoritos = (produtoId: number) => {
    const novosFavoritos = favoritos.filter((item) => item.id !== produtoId);
    setFavoritos(novosFavoritos);
    salvarEstado();
  };

  return (
    <AppContext.Provider
      value={{
        userId,
        favoritos,
        carrinho,
        quantidades,
        adicionarAosFavoritos,
        adicionarAoCarrinho,
        removerDoCarrinho,
        removerDosFavoritos,
        setQuantidades,
        setCarrinho,
        salvarEstado,
        carregarEstado,
        logout,
        setUserId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};