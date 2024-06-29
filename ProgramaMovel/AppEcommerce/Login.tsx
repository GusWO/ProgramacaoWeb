import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from './AppContext'; 
import { useNavigation } from '@react-navigation/native';


const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { carregarEstado, salvarEstado, setUserId } = useContext(AppContext); // Utilize o contexto

  const handleCadastro = async () => {
    if (email && senha) {
      try {
        const userData = { email, senha };
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        await AsyncStorage.setItem('userId', email); // Salve o userId
        setUserId(email);
        await carregarEstado(email); // Carregue o estado do usuário
        await salvarEstado(); // Salve o estado do usuário
        Alert.alert('Cadastro', 'Cadastro realizado com sucesso!');
        
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível salvar os dados');
      }
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
    }
  };

  const handleLogin = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userData');
      const userData = jsonValue ? JSON.parse(jsonValue) : null;

      if (userData?.email === email && userData?.senha === senha) {
        await AsyncStorage.setItem('userId', email); // Salve o userId
        setUserId(email);
        await carregarEstado(email); // Carregue o estado do usuário
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        
      } else {
        Alert.alert('Erro', 'Email ou senha incorretos');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível realizar o login');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Login;
