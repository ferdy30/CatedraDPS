import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//importacion de navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Registro from '../Screens/Registro';
import Login from '../Screens/Login';
import Drawer from '../Navigation/Drawer';

export default function ButtonNavigation() {

    const Stack = createStackNavigator();

   return (
        <NavigationContainer>
          <Stack.Navigator screenOptions = {{headerShown:false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Drawer" component={Drawer} />
            <Stack.Screen name="Registro" component={Registro} />
            
          </Stack.Navigator>
        </NavigationContainer> 
   )
}