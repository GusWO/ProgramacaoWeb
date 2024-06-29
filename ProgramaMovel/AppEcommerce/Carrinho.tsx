import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { AppContext } from './AppContext';

const Carrinho = () => {
  const { carrinho, quantidades, setQuantidades, removerDoCarrinho, setCarrinho, salvarEstado } = useContext(AppContext);

  const handleQuantidadeChange = (index: number, quantidade: number) => {
    const newQuantidades = [...quantidades];
    newQuantidades[index] = quantidade;
    setQuantidades(newQuantidades);
    salvarEstado();
  };

  const handleComprarTudo = () => {
    Alert.alert('Sucesso', 'Todos os itens foram comprados com sucesso!');
    setCarrinho([]);
    setQuantidades([]);
    salvarEstado();
  };

  const handleComprarItem = (produtoId: number) => {
    Alert.alert('Sucesso', 'Item comprado com sucesso!');
    removerDoCarrinho(produtoId);
    salvarEstado();
  };

  const handleRemoverItem = (produtoId: number) => {
    removerDoCarrinho(produtoId);
    salvarEstado();
  };

  const total = carrinho.reduce((acc, produto, index) => acc + produto.valor * quantidades[index], 0);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Carrinho</Text>
        <View style={styles.produtosContainer}>
          {carrinho.map((produto, index) => (
            <View key={produto.id} style={styles.produto}>
              <Image source={produto.imagem} style={styles.imagemProduto} />
              <Text>{produto.nome}</Text>
              <Text>R$ {produto.valor}</Text>
              <TextInput
                style={styles.input}
                value={quantidades[index]?.toString() || '1'}
                keyboardType="numeric"
                onChangeText={(text) => handleQuantidadeChange(index, parseInt(text) || 1)}
              />
              <TouchableOpacity style={styles.botao} onPress={() => handleComprarItem(produto.id)}>
                <Text>Comprar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoRemover} onPress={() => handleRemoverItem(produto.id)}>
                <Text>Remover</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Text style={styles.total}>Total: R$ {total}</Text>
        <TouchableOpacity style={styles.botaoTotal} onPress={handleComprarTudo}>
          <Text>Comprar Tudo</Text>
        </TouchableOpacity>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 50,
    textAlign: 'center',
    marginVertical: 10,
  },
  botao: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  botaoRemover: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  botaoTotal: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default Carrinho;
