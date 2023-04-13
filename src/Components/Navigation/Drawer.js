import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/Home';



const Stack = createStackNavigator();

export default function App() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="Restaurante" component={HomeScreen} />
      </Stack.Navigator>
   
  );
}


