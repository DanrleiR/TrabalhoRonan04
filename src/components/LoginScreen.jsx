import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TextInputComponent from './TextInputComponent';
import PressableComponent from './PressableComponent';
import { Button } from 'react-native-web';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostraSenha, setMostraSenha] = useState(true);

  const handleLogin = () => {
    if (!email.includes('@')) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    if (!email.endsWith('@ifpr.edu.br') && !email.endsWith('@estudantes.ifpr.edu.br')) {
      alert('Você deve usar um e-mail do IFPR ou estudante do IFPR.');
      return;
    }
    if (senha.trim() === '') {
      alert('Você deve preencher o campo senha!');
      return; // Não permite senha em branco
    }

    console.log('Email:', email);
    console.log('Senha:', senha);

    navigation.navigate('Mensagem');
  };

  const MostraSenha1 = () => {
    setMostraSenha(!mostraSenha);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/sistema.jpg')} style={styles.image1}></Image>
      <Text style={styles.title}>Acesso ao Chat</Text>
      <Text style={styles.title2}>Use seu e-mail e senha cadastrados para acessar o painel de conversas</Text>
      <TextInputComponent type="email" placeholder="E-mail" value={email} onChangeText={setEmail} />
      <TextInputComponent type="default" placeholder="Senha" senha={mostraSenha} value={senha} onChangeText={setSenha} />
      <Button onPress={MostraSenha1}>
        <Image source={require('../../assets/icon.png')} style={styles.image2} />
      </Button>
      <PressableComponent onPress={handleLogin} type="dark">Login</PressableComponent>
      <PressableComponent onPress={() => navigation.navigate('Cadastro')} type="dark">Criar Conta</PressableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#247ba0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginBottom: 20,
    width: '80%',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
  },
  title2: {
    fontSize: 20,
    color: 'black',
    fontSize: 18,
    width: '80%',
    textAlign: 'center',
    marginBottom: 20,
    justifyContent: 'center',

  },
  image1: {
    width: 190,
    height: 190,
    borderRadius: 15
  },
});

export default LoginScreen;
