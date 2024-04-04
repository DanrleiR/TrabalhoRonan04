import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import TextInputComponent from './TextInputComponent';
import PressableComponent from './PressableComponent';

const MensagemScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState(null); // Estado para armazenar o filtro selecionado

  const sendMessage = () => {
    if (inputText.trim() === '') {
      return; // Não envia mensagens em branco
    }

    const newMessage = {
      user: 'Alunos', // Todas as mensagens serão da categoria "Alunos"
      text: inputText,
      time: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString() // Captura a data e a hora de envio
    };    

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const filterMessages = (filter) => {
    setFilter(filter);
  };

  const renderItem = ({ item }) => {
    const isCurrentUser = item.user === 'Eu';
    if (filter && filter !== 'Todos' && item.user !== filter) {
      return null; // Retorna null para filtrar a mensagem
    }
    return (
      <View style={[styles.messageContainer, isCurrentUser && styles.currentUserMessage]}>
        <Text style={[styles.username, isCurrentUser && styles.currentUserText]}>{item.user}</Text>
        <Text>{item.text}</Text>
        <Text style={[styles.time, isCurrentUser && styles.currentUserText]}>{item.time}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Opções de mensagens */}
      <View style={styles.opcoes}>
        <TouchableOpacity style={styles.botaoNav} onPress={() => filterMessages('Todos')}>
          <Text style={styles.botaoNavText}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNav} onPress={() => filterMessages('Alunos')}>
          <Text style={styles.botaoNavText}>Alunos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNav} onPress={() => filterMessages('Professores')}>
          <Text style={styles.botaoNavText}>Professores</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList +ou- funcional para possivel uso futuro */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.inputContainer}>
        <TextInputComponent placeholder="Digite sua mensagem" value={inputText} onChangeText={setInputText}/>
        <PressableComponent onPress={sendMessage} type="dark">Enviar</PressableComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#247ba0',
    flex: 1,
    padding: 20
  },
  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  botaoNav: {
    backgroundColor: '#1b98e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  botaoNavText: {
    color: '#ffffff'
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff'
  },
  currentUserMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#1b98e0'
  },
  username: {
    fontWeight: 'bold',
    color: '#ffffff'
  },
  currentUserText: {
    color: '#000000'
  },
  time: {
    color: '#ffffff',
    fontSize: 12
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default MensagemScreen;