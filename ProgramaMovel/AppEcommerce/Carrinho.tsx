import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AppContext } from './AppContext';

const Carrinho = () => {
  const { carrinho } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      <View style={styles.produtosContainer}>
        {carrinho.map((produto) => (
          <View key={produto.id} style={styles.produto}>
            <Image source={produto.imagem} style={styles.imagemProduto} />
            <Text>{produto.nome}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  produtosContainer: {
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
});

export default Carrinho;
