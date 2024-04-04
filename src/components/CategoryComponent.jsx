import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CategoryComponent = ({ categoria, setCategoria, categorias }) => {
  return (
    <View style={styles.selectContainer}>
      <Text style={styles.selectLabel}>Selecione a categoria:</Text>
      <Picker
        selectedValue={categoria}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}>
        {categorias.map((cat, index) => (
          <Picker.Item label={cat} value={cat} key={index} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  selectContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  selectLabel: {
    marginBottom: 20,
    width: '80%',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
  },
  picker: {
    backgroundColor: '#13293d',
    padding: 10,
    borderRadius: 15,
    borderColor: '#006494',
    borderWidth: 3,
    marginBottom: 10,
    height: 50,
    width: 200,

  }
});

export default CategoryComponent;