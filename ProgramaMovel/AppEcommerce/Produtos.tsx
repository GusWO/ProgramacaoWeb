import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Produtos = () => {
  // Array de produtos
  const produtos = [
    { id: 1, nome: 'Alexa', imagem: require('./imagensProdutos/AlexaProduto.jpg') },
    { id: 2, nome: 'Fone de Celular', imagem: require('./imagensProdutos/FoneCelularProduto.jpg') },
    { id: 3, nome: 'Produto 3', imagem: require('./imagensProdutos/FoneProduto.jpg') },
    { id: 4, nome: '', imagem: require('./imagensProdutos/ImpressoraProduto.jpg')},
    { id: 5, nome: '', imagem: require('./imagensProdutos/SmartWatchProduto.jpg')},
    {},
    {},
    {},
    {},
  ];

  // Função para lidar com o clique no botão de favoritos
  const handleFavoritos = (produtoId: number) => {
    // Implemente sua lógica para adicionar/remover o produto dos favoritos
    console.log(`Produto ${produtoId} adicionado aos favoritos`);
  };

  // Função para lidar com o clique no botão de carrinho
  const handleCarrinho = (produtoId: number) => {
    // Implemente sua lógica para adicionar o produto ao carrinho
    console.log(`Produto ${produtoId} adicionado ao carrinho`);
  };

  return (
    <View style={styles.container}>
      {/* Mapeia os produtos e renderiza cada um */}
      {produtos.map((produto) => (
        <View key={produto.id} style={styles.produto}>
          <Image source={produto.imagem} style={styles.imagemProduto} />
          <Text>{produto.nome}</Text>
          {/* Botões de favoritos e carrinho */}
          <View style={styles.botaoContainer}>
            <TouchableOpacity onPress={() => handleFavoritos(produto.id)} style={styles.botao}>
              <Text>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleCarrinho(produto.id)} style={styles.botao}>
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
  },
});

export default Produtos;
