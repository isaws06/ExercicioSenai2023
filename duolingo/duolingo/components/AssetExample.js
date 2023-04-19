import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.centered}>
      <Image source={require('../assets/duo.png')} style={styles.logo} />
      <Text style={styles.title}>Learn a language for free. </Text>
        </View>
    <TouchableOpacity style={styles.button} onPress={() => alert('Botão de Get Started Clicado!')}>
  <Text style={[styles.buttonText, {color: 'white', fontFamily: 'Arial', textAlign: 'center',}]}>Get Started</Text>
</TouchableOpacity>
     <TouchableOpacity style={styles.button2} onPress={() => alert('Botão de I already have an account Clicado!')}>
  <Text style={[styles.buttonText, {color: '#639800', fontFamily: 'Arial', textAlign: 'center'}]}>I already have an account</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },

  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  logo: {
    width: 220,
    height: 220,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: '#b8b8b8',
    margin: 10,
    textAling: 'center',
 
  
  },
  button: {
    backgroundColor: '#639800',
    padding: 15,
    borderRadius: 12,
    marginBottom: 17,
    width: '95%',
    elevation: 5, 
    marginVertical: 0,
  },
  button2: {
    backgroundColor: '#ffff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 17,
    elevation: 5,
    width: '95%',
    fontFamily: 'Headlines',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});