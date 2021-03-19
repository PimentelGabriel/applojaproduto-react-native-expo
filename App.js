import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {createGlobalStyle} from 'styled-components';

import Colors from './assets/Colors';

import TelaDetalheProduto from './src/telas/detalheProduto';
import TelaHome from './src/telas/home';
import TelaLogin from './src/telas/login';

const Stack = createStackNavigator();

// const GlobalStyle = createGlobalStyle`
//   body{
//     font-size: 20px;
//   }
// `;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="TelaLogin"
        screenOptions={{
          headerTitleAlign: 'center',
          title: "Loja do Gabriel Pimentel",
          headerStyle: {
            backgroundColor: Colors.CorA[0]
          }
       }}
      >
        <Stack.Screen 
          name="TelaLogin"
          component={TelaLogin}
          options={{
            headerShown: true
          }}
        />
        <Stack.Screen
          name="TelaHome"
          component={TelaHome}
          />
        <Stack.Screen 
          name="TelaDetalheProduto"
          component={TelaDetalheProduto}
        />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}
