import React, { useState } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import PressableComponent from './PressableComponent';
import TextInputComponent from './TextInputComponent';
import CategoryComponent from './CategoryComponent';
import { Button } from 'react-native-web';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [categoria, setCategoria] = useState('');
  const categorias = ['Aluno', 'Professor'];
  const [mostraSenha, setMostraSenha] = useState(true);

  const handleCadastro = () => {
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Categoria:', categoria); {
    };

    const mostraSenha1 = () => {
      setMostraSenha(!mostraSenha);
    }

    return (
      <View style={styles.container}>
        <Image source={require('../../assets/sistema.jpg')} style={styles.image1}></Image>
        <Text style={styles.title}>Cadastre-se</Text>
        <TextInputComponent type="default" placeholder="Nome" value={nome} onChangeText={setNome} />
        <TextInputComponent type="email" placeholder="email@ifpr... ou email@estudantes.ifpr..." value={email} onChangeText={setEmail} />
        <TextInputComponent type="default" placeholder="Senha" senha={mostraSenha} value={senha} onChangeText={setSenha} />
        <Button onPress={mostraSenha1}>
          <Image source={require('../../assets/icon.png')} style={styles.image2}/>
        </Button>
        <CategoryComponent categoria={categoria} setCategoria={setCategoria} categorias={categorias} />
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
}
export default CadastroScreen;