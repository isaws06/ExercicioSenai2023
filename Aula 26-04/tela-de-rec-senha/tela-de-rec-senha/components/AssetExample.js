import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, } from 'react-native';

export default function SignupScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSignUp() {
 
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Add your code to sign up the user here
  }

  return (
    <View style={styles.container}>
       <Image source={require('../assets/face.jpg')} style={styles.logo} />
      <Text style={styles.title}>Recuperação de senha</Text>
    
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Nova senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

        <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Enviar email de recuperação</Text>
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
    height: 100,
    width: 250,
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 32,
  },

  input: {
    width: '80%',
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 17,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
