import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Footer from './Footer';
import Navigation from './Navigation';



export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.containerConteudoPrincipal}>
          
        </View>
        <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6579C0',
  },

  containerConteudoPrincipal:{
    flex: 1,
    backgroundColor: '#3203541',
  },

  containerProduto :{
  },

  containerProdutosLinha :{
  }

});
