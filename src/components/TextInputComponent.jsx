import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextInputComponent = ({ type, placeholder, value, onChangeText, senha }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={type === 'email' ? 'email-address' : 'default'}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={senha}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#7EBBFC',
    width:'85%',
    borderRadius: 16,   

  }
});

export default TextInputComponent;
