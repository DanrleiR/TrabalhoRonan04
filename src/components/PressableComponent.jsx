import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PressableComponent = ({ onPress, type, children }) => {
  const styles = StyleSheet.create({
    buttonDark: {
      backgroundColor: '#13293d',
      padding: 10,
      borderRadius: 15,   
      borderColor: '#006494',
      borderWidth: 3,
      marginBottom: 10,
 
    },
    buttonLight: {
      backgroundColor: '#e8f1f2',
      padding: 10,
      borderRadius: 8,   
      borderColor: '#006494',
      borderWidth: 3,
      marginBottom: 10,
    },
    textDark: {
      color: 'white'
    },
    textLight: {
      color: 'black'
    }
    
  });

  const buttonStyle = type === 'dark' ? styles.buttonDark : styles.buttonLight;
  const textStyle = type === 'dark' ? styles.textDark : styles.textLight;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity >
  );
};

export default PressableComponent;
