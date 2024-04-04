import React from 'react';
import { StyleSheet, View } from 'react-native';

const ContainerComponent = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
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
  }
});

export default ContainerComponent;
