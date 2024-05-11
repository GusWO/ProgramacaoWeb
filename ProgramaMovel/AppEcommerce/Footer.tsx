import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const Footer = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.containerButtons}>
        <TouchableOpacity>
            <Image source = {require('./imagensIconesFooter/login.png')} style={styles.button1}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
            <Image source = {require('./imagensIconesFooter/home.png')} style={styles.button2}/>
        </TouchableOpacity>
            
        <TouchableOpacity style={styles.button3}>
            <Image source = {require('./imagensIconesFooter/carrinho.png')} style={styles.button3}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button4}>
            <Image source = {require('./imagensIconesFooter/favorito.png')} style={styles.button4}/>
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


  containerButtons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignitems: 'center',
  },

  button1:{
    width: 40,
    height: 40,
    position: 'relative',
    left: -80,
  },

  button2:{
    position: 'relative',
    width: 40,
    height: 40,
    left: -10,
  },

  button3:{
    position: 'relative',
    width: 40,
    height: 40,
    left: 20,
  },

  button4:{
    width: 40,
    height: 40,
    position: 'relative',
    left: 40,
  },
});

export default Footer;