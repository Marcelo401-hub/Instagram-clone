import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StoryScreen from './../screens/HomeScreen/StoryScreen';
import BottomHomeNavigator from './bottomHomeNavigationroutes';


const RootStack = createStackNavigator();

const Router = () => (
    <RootStack.Navigator>
      <RootStack.Screen 
      name={"Home"}
      component={BottomHomeNavigator}
      options={{
        headerShown: false
      }}
      />

<RootStack.Screen 
      name={"Story"}
      component={StoryScreen}
      options={{
        headerShown: false
      }}
      />
   
    
     

    </RootStack.Navigator>
      
)

export default Router;