import React, { useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import PressableComponent from './PressableComponent';
import TextInputComponent from './TextInputComponent';
import CategoryComponent from './CategoryComponent';
import { Button } from 'react-native-web';
import { db } from '../services/firebaseConf';
import { collection, addDoc } from "firebase/firestore";

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [categoria, setCategoria] = useState('');
  const categorias = ['Aluno', 'Professor'];
  const [mostraSenha, setMostraSenha] = useState(true);

  async function handleCadastro  () {
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
    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        nome,
        email,
        senha,
        categoria
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Categoria:', categoria);

    navigation.navigate('Mensagem');
  };

  const MostraSenha1 = () => {
    setMostraSenha(!mostraSenha);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/sistema.jpg')} style={styles.image1} />
      <Text style={styles.title}>Cadastre-se</Text>
      <TextInputComponent type="default" placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInputComponent type="email" placeholder="email@ifpr... ou email@estudantes.ifpr..." value={email} onChangeText={setEmail} />
      <TextInputComponent type="default" placeholder="Senha" senha={mostraSenha} value={senha} onChangeText={setSenha} />
      <Button onPress={MostraSenha1}>
        <Image source={require('../../assets/icon.png')} style={styles.image2} />
      </Button>
      <CategoryComponent categoria={categoria} onChange={(e) => setCategoria(e)} categorias={categorias} />
      <PressableComponent onPress={handleCadastro} type="dark" style={styles.button}>Cadastrar</PressableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#247ba0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    marginBottom: 20,
    width: '80%',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
  },
  button: {
    marginTop: 20
  },
  image1: {
    width: 190,
    height: 190,
    borderRadius: 15
  },
  image2: {
    width: 100,
    height: 100,
    borderRadius: 15
  }
});

export default CadastroScreen;
