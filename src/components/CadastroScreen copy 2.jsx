import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PressableComponent from './PressableComponent';
import TextInputComponent from './TextInputComponent';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [categoria, setCategoria] = useState('');
  const categorias = ['Aluno', 'Professor'];

  const handleCadastro = () => {
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Categoria:', categoria);
  };

  const selectCategoria = (selectedCategoria) => {
    setCategoria(selectedCategoria);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/sistema.jpg')} style={styles.image1}></Image>
      <Text style={styles.title}>Cadastre-se</Text>
      <TextInputComponent type="default" placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInputComponent type="email" placeholder="email@ifpr... ou email@estudantes.ifpr..." value={email} onChangeText={setEmail}/>
      <TextInputComponent type="default" placeholder="Senha" secureTextEntry={true} value={senha} onChangeText={setSenha}/>
      <View style={styles.selectContainer}>
        <Text style={styles.selectLabel}>Selecione a categoria:</Text>
        {categorias.map((cat, index) => (
          <TouchableOpacity key={index} style={[styles.selectButton, categoria === cat && styles.selectButtonActive]} onPress={() => selectCategoria(cat)}>
            <Text style={styles.selectButtonText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
  selectContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  selectLabel: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  selectButton: {
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 16,
    backgroundColor: '#7EBBFC',
    borderColor: '#006494',
    borderWidth: 3,
  },
  selectButtonActive: {
    backgroundColor: '#247ba0'
  },
  selectButtonText: {
    color: '#ffffff'
  }
});

export default CadastroScreen;
