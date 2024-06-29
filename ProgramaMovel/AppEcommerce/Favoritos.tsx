import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AppContext } from './AppContext';

const Favoritos = () => {
  const { favoritos, removerDosFavoritos } = useContext(AppContext);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Favoritos</Text>
        <View style={styles.produtosContainer}>
          {favoritos.map((produto) => (
            <View key={produto.id} style={styles.produto}>
              <Image source={produto.imagem} style={styles.imagemProduto} />
              <Text>{produto.nome}</Text>
              <Text>R$ {produto.valor}</Text>
              <TouchableOpacity style={styles.botaoRemover} onPress={() => removerDosFavoritos(produto.id)}>
                <Text>Remover</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
  botaoRemover: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
});

export default Favoritos;
