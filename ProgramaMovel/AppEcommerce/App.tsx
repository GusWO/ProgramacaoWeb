import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Produtos from './Produtos'
import Login from './Login'
import Carrinho from './Carrinho'
import Favoritos from './Favoritos'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider } from './AppContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen options={{ tabBarLabel: 'Login', tabBarIcon: () => (
            <Image source={require('./imagensIconesFooter/login.png')} style={styles.iconProduto} />
          )}} name="Login" component={Login} />
          
          <Tab.Screen options={{ tabBarLabel: 'Produtos', tabBarIcon: () => (
            <Image source={require('./imagensIconesFooter/home.png')} style={styles.iconProduto} />
          )}} name="Produtos" component={Produtos} />
          
          <Tab.Screen options={{ tabBarLabel: 'Carrinho', tabBarIcon: () => (
            <Image source={require('./imagensIconesFooter/carrinho.png')} style={styles.iconProduto} />
          )}} name="Carrinho" component={Carrinho} />
          
          <Tab.Screen options={{ tabBarLabel: 'Favoritos', tabBarIcon: () => (
            <Image source={require('./imagensIconesFooter/favorito.png')} style={styles.iconProduto} />
          )}} name="Favoritos" component={Favoritos} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
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
  },
  
  iconProduto: {
    width: 25,
    height: 25,
    },
});
