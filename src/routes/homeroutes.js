import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/HomeScreen/StoryScreen';
import LogoAlternativa from '../assets/images/LogoAlternativa.png';

import Feather from 'react-native-vector-icons/Feather';
import Paper from 'react-native-vector-icons/Ionicons';



const HomeStack = createStackNavigator();


const HomeRoutes = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
            title: "Schoobol",
          headerLeftContainerStyle: {
         padding: 10,
       },
       headerRightContainerStyle: {
        padding: 10,
      },
       headerTitleContainerStyle:{
        alignItems: 'center'
       },

       headerLeft: () => {
        return <Feather name="camera" size={24} color='#131313'/>
       },

       headerTitle: () => {
        return <Image source={LogoAlternativa} resizeMode="contain" style={{width: 135, height: 50}}/>
       },

       headerRight: () => {
        return <Paper name="paper-plane-outline" size={24} color={"#424242"}/>
       }
     }}
     />
     
  </HomeStack.Navigator>
)

export default HomeRoutes;