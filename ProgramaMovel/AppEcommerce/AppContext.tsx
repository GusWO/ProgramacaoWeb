import React, { createContext, useState, ReactNode } from 'react';


type AppContextType = {
  favoritos: any[]; 
  carrinho: any[]; 
  adicionarAosFavoritos: (produto: any) => void;
  adicionarAoCarrinho: (produto: any) => void;
};

// Criar o contexto inicial com valores padrão
export const AppContext = createContext<AppContextType>({
  favoritos: [],
  carrinho: [],
  adicionarAosFavoritos: () => {},
  adicionarAoCarrinho: () => {},
});

// Componente Provedor do Contexto
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoritos, setFavoritos] = useState<any[]>([]);
  const [carrinho, setCarrinho] = useState<any[]>([]);

  // Função para adicionar um produto aos favoritos
  const adicionarAosFavoritos = (produto: any) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, produto]);
  };

  // Função para adicionar um produto ao carrinho
  const adicionarAoCarrinho = (produto: any) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };

  // Valores do contexto que serão compartilhados
  const contextValues: AppContextType = {
    favoritos,
    carrinho,
    adicionarAosFavoritos,
    adicionarAoCarrinho,
  };

  // Retorna o provedor do contexto com os valores fornecidos
  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};
