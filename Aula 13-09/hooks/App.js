import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView, Picker  } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idiomaCurriculo, setIdiomaCurriculo] = useState('');
  const [valoresInformados, setValoresInformados] = useState(null);

  const handleCadastrar = () => {
    // Exibir os valores no console
    console.log('Valores informados:');
    console.log('Nome:', nome);
    console.log('Gênero:', genero);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Usuário:', usuario);
    console.log('Senha:', senha);
    console.log('E-mail:', email);
    console.log('Confirmar E-mail:', confirmarEmail);
    console.log('CPF:', cpf);
    console.log('Idioma do Currículo:', idiomaCurriculo);

    // Atualizar o estado para exibir os valores na tela
    setValoresInformados({
      Nome: nome,
      Gênero: genero,
      'Data de Nascimento': dataNascimento,
      Usuário: usuario,
      Senha: senha,
      'E-mail': email,
      'Confirmar E-mail': confirmarEmail,
      CPF: cpf,
      'Idioma do Currículo': idiomaCurriculo,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <Text>Gênero:</Text>
      <Picker
        selectedValue={genero}
        style={styles.input}
        onValueChange={(itemValue) => setGenero(itemValue)}
      >
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Outro" value="Outro" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        onChangeText={text => setDataNascimento(text)}
        value={dataNascimento}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        onChangeText={text => setUsuario(text)}
        value={usuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setSenha(text)}
        value={senha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme seu E-mail"
        onChangeText={text => setConfirmarEmail(text)}
        value={confirmarEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        onChangeText={text => setCpf(text)}
        value={cpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Idioma do Currículo"
        onChangeText={text => setIdiomaCurriculo(text)}
        value={idiomaCurriculo}
      />
      <Button title="CADASTRAR" onPress={handleCadastrar} />
      {valoresInformados && (
        <View style={styles.resultContainer}>
          <Text>Valores informados:</Text>
          {Object.entries(valoresInformados).map(([key, value]) => (
            <Text key={key}>
              {key}: {value}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
   
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '55%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'right',
    fontWeight: "bold"
  },
});
