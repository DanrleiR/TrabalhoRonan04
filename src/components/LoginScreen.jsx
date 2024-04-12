import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TextInputComponent from './TextInputComponent';
import PressableComponent from './PressableComponent';
import { Button } from 'react-native-web';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../services/firebaseConf';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostraSenha, setMostraSenha] = useState(true);

  async function handleLogin() {

    const usuarios = collection(db, 'usuarios')
    const q = query(usuarios, where("email", "==", email))

    //console.log(q);

    const dados = await getDocs(q)
    dados.forEach(dado =>{
      console.log(dado.data())

      if(dado.data().senha == senha){
        navigation.navigate('Mensagem')
      }else{
        alert("Email ou senha incorreta");
      }
    })

    //console.log('Email:', email);
    //console.log('Senha:', senha);

  };

  const MostraSenha1 = () => {
    setMostraSenha(!mostraSenha);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/sistema.jpg')} style={styles.image1}></Image>
      <Text style={styles.title}>Acesso ao Chat</Text>
      <Text style={styles.title2}>Use seu e-mail e senha cadastrados para acessar o painel de conversas</Text>

      <TextInputComponent
        type="email"
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInputComponent
        type="default"
        placeholder="Senha"
        senha={mostraSenha}
        value={senha}
        onChangeText={setSenha}
      />

      <Button onPress={MostraSenha1} style={styles.mostraSenha}>
        {/*<Image source={require('../../assets/icon.png')} style={styles.image2} />*/}
        <text>Mostrar senha</text>
      </Button>
      <PressableComponent
        onPress={handleLogin}
        type="dark">
        Login
      </PressableComponent>

      <PressableComponent
        onPress={() => navigation.navigate('Cadastro')}
        type="dark">
        Criar Conta
      </PressableComponent>
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
  mostraSenha: {
    fontSize: 30,
    backgroundColor: '#ffffff',
  },
});

export default LoginScreen;
