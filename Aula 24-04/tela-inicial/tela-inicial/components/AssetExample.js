import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function FacebookHome() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Bem-vindo ao </Text>
   <Text style={[styles.buttonText, {color: 'white', fontFamily: 'Arial', textAlign: 'center',}]}>Bem-vindo ao</Text>
      <Image source={require('../assets/face1.png')} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Cadastro clicado')}>
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Login clicado')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 100,
    marginBottom: 200,
  },
  button: {
    backgroundColor: '#1877f2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});