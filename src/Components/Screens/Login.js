import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Login(){

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../../assets/letrasYAA.png')} />
        </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity
        style={styles.button} 
        onPress={()=> navigation.navigate('Drawer')}
      >
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonTextRegistro}
        onPress={()=> navigation.navigate('Registro')}
      >
        <Text style={styles.textRegistro}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8F161C',
    padding: 20,
  },
  logoContainer:{
    width: '40%',
    height: '8%',
    marginBottom: 35,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#470B0E',
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextRegistro: {
    position: 'absolute',
    marginBottom: 40,
    bottom: 0,
  },
  textRegistro: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 300,
  },
});
