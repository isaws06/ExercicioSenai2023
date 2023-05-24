import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Função para lidar com o login
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleCreateAccount = () => {
    // Função para lidar com a criação de uma conta
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />     
      <Text style={styles.paragraph}>Marketspace</Text>
      <Text style={styles.text}>Seu espaço de compra e venda</Text>
      <Text style={styles.text2}>Acesse sua conta</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.text3}>Ainda não tem acesso?</Text>

      <TouchableOpacity style={styles.button2} onPress={handleCreateAccount}>
        <Text style={styles.buttonText2}>Criar uma conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#edecee'
  },

  text:{
    fontSize: 14,
    marginBottom: 40,
    padding: 1,
    color: '#acabaf',
  },

   text2:{
    fontSize: 14,
    marginBottom: 20,
    marginTop: 20,
    padding: 1,
    color: '##3f3a42',
  },

   text3:{
    fontSize: 14,
    marginBottom: 20,
    marginTop: 85,
    padding: 1,
    color: '##3f3a42',
  },

  paragraph: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  logo: {
    marginBottom: 24,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#f7f7f8',
    backgroundColor: '#f7f7f8',
    borderRadius: 10,
    textcolor: '#b4b1b6',
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#647ac6',
    paddingVertical: 12,
    paddingHorizontal: 120,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center'
  },
  button2: {
    width: '100%',
    backgroundColor: '#d9d8da',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText2: {
    color: '#3b3843',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
