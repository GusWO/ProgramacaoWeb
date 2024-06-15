import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AppContext } from './AppContext';

const Produtos = () => {
  const { adicionarAoCarrinho, adicionarAosFavoritos } = useContext(AppContext);

  const produtos = [
    { id: 1, nome: 'Alexa', imagem: require('./imagensProdutos/AlexaProduto.jpg') },
    { id: 2, nome: 'Fone de Celular', imagem: require('./imagensProdutos/FoneCelularProduto.jpg') },
    { id: 3, nome: 'Fone', imagem: require('./imagensProdutos/FoneProduto.jpg') },
    { id: 4, nome: 'Impressora', imagem: require('./imagensProdutos/ImpressoraProduto.jpg') },
    { id: 5, nome: 'SmartWatch', imagem: require('./imagensProdutos/SmartWatchProduto.jpg') },
    { id: 6, nome: '', imagem: require('') },
    { id: 7, nome: '', imagem: require('') },
    { id: 8, nome: '', imagem: require('') },
    { id: 9, nome: '', imagem: require('') },
  ];

  const handleFavoritos = (produto) => {
    adicionarAosFavoritos(produto);
  };

  const handleCarrinho = (produto) => {
    adicionarAoCarrinho(produto);
  };

  return (
    <View style={styles.container}>
      {produtos.map((produto) => (
        <View key={produto.id} style={styles.produto}>
          <Image source={produto.imagem} style={styles.imagemProduto} />
          <Text>{produto.nome}</Text>
          <View style={styles.botaoContainer}>
            <TouchableOpacity onPress={() => handleFavoritos(produto)} style={styles.botao}>
              <Text>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCarrinho(produto)} style={styles.botao}>
              <Text>Carrinho</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  produto: {
    width: '30%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  imagemProduto: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  botaoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
  },
  botao: {
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,
    textAlign: 'center'
  },
});

export default Produtos;
