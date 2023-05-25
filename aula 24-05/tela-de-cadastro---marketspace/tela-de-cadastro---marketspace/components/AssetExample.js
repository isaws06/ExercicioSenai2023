import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.text1}> Boas Vindas! </Text>
      <Text style={styles.text2}> Crie sua conta e use o espaço para comprar itens váriados e vender seus produtos </Text>
      <Image style={styles.logo} source={require('../assets/logo - cadastro.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    width: '100%',
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text2: {
    fontSize: 14,
    fontWeight: 'feather bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
});
