import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
     <AssetExample />
      <TextInput
        style={styles.input}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
      />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Criar </Text>
        </TouchableOpacity>
        <Text style={styles.text4}> Já tem uma conta? </Text>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Ir para o login</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#edecee',
    padding: 8,
  },
    button: {
    backgroundColor: '#1a181b',
    borderRadius: 15,
    width: 350,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: 350,
    marginTop: 8,
    paddingHorizontal: 16,
  },
    text4: {
    marginTop: 10,
  },
    button2: {
    backgroundColor: '#d9d8da',
    borderRadius: 15,
    width: 350,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 70,
  },
  buttonText2: {
    color: '#474349',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
