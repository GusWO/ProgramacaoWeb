import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.containerButtons}>
        
        <TouchableOpacity style={styles.button1}>
            <Text>Botão 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
            <Text>Botão 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3}>
            <Text>Botão 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button4}>
            <Text>Botão 2</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1941D0',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    flex: 0,
    paddingBottom:0,
  },

  text: {
    color: 'white',
    fontSize: 16,
  },

  containerButtons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  button1:{
    marginLeft: -80,
  },

  button2:{
    marginLeft: 20,
  },

  button3:{
    marginLeft: 20,
  },

  button4:{
  },
});

export default Footer;