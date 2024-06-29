import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AppContext } from './AppContext';

const Produtos = () => {
  const { adicionarAoCarrinho, adicionarAosFavoritos } = useContext(AppContext);

  const produtos = [
    { id: 1, nome: 'Alexa', imagem: require('./imagensProdutos/AlexaProduto.jpg'), valor: 200 },
    { id: 2, nome: 'Fone de Celular', imagem: require('./imagensProdutos/FoneCelularProduto.jpg'), valor: 150 },
    { id: 3, nome: 'Fone', imagem: require('./imagensProdutos/FoneProduto.jpg'), valor: 100 },
    { id: 4, nome: 'Impressora', imagem: require('./imagensProdutos/ImpressoraProduto.jpg'), valor: 500 },
    { id: 5, nome: 'SmartWatch', imagem: require('./imagensProdutos/SmartWatchProduto.jpg'), valor: 300 },
    { id: 6, nome: 'RTX 4060', imagem: require('./imagensProdutos/notebook.jpg'), valor: 2500 },
    { id: 7, nome: 'Notebook', imagem: require('./imagensProdutos/notebook.jpg'), valor: 3000 },
    { id: 8, nome: 'Processador AMD', imagem: require('./imagensProdutos/processador-amd-ryzen-7-5700g-3-8ghz-4-6ghz-max-turbo-am4-video-integrado-8-nucleos-100-100000263box_1627588652_m.jpg'), valor: 800 },
    { id: 9, nome: 'Placa mãe', imagem: require('./imagensProdutos/placa-mae-msi-a520m-a-pro-amd-am4-matx-ddr4_1646852577_g.jpg'), valor: 600 },
  ];

  const handleFavoritos = (produto: any) => {
    adicionarAosFavoritos(produto);
  };

  const handleCarrinho = (produto: any) => {
    adicionarAoCarrinho(produto);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {produtos.map((produto) => (
          <View key={produto.id} style={styles.produto}>
            <Image source={produto.imagem} style={styles.imagemProduto} />
            <Text>{produto.nome}</Text>
            <Text>R$ {produto.valor}</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
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
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
});

export default Produtos;
