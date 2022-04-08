import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Font from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ADIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeStackScreen  from './homeroutes';
import DiscoveryScreen from '../screens/HomeScreen/DiscoveryScreen';
import PostScreen from './../screens/HomeScreen/PostScreen';
import NotificationScreen from './../screens/HomeScreen/NotificationsScreen';
import ProfileScreen from './../screens/HomeScreen/ProfileScreen';



const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Home') {
              return <Font name="school" size={size} color='#cf0'/>
            }

            if (route.name === 'Discovery') {
              return <Feather name="search" size={size} color='#131313'/>
            } 

            if (route.name === 'Post') {
              return <AntDesign name="pluscircleo" size={size} color='#131313'/>
            } 

            if (route.name === 'Notifications') {
              return <ADIcon name="hearto" size={size} color='#131313'/>
            } 

            if (route.name === 'Profile') {
              return <Ionicons name="person-outline" size={size} color='#131313'/>
            } 
          
         

          },
        })}
        tabBarOptions={{
          activeTintColor: '#131313',
          inactiveTintColor: 'gray',
          showLabel: false,
        
        }}
        >

          <Tab.Screen name="Home" component={HomeStackScreen}/>
         
          <Tab.Screen name="Post" component={PostScreen}/>
         
          <Tab.Screen name="Profile" component={ProfileScreen}/>

        </Tab.Navigator>
      
)

export default BottomHomeNavigator;