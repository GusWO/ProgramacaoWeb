import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';


const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (

        <Stack.Screen name="App" component={App} options={{ headerShown: false }} />
      
  );
};

export default Navigation;
