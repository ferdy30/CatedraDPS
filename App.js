import React from 'react';
import { StyleSheet, View } from 'react-native'
import HomeScreen from './src/Components/Navigation/Drawer'
import ButtonNavigation from './src/Components/Navigation/ButtonNavigation'


export default function App() {
  return (
    <View style={styles.container}>
      <ButtonNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
