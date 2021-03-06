/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { withAuthenticator } from 'aws-amplify-react-native'
import Router from './routes';

const App = () => {
  
   return (
    <NavigationContainer>

      <StatusBar barStyle='dark' />
      <Router/>
      
    </NavigationContainer>
   
  );
};

export default withAuthenticator(App);
