import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

import ChatItem from '../components/ChatItem';
import chat_data from '../data/chatList.json';

const HomeScreen = () => {
  const renderChat = ({item}) => <ChatItem chat={item} />;
  const keyExtractorChat = item => item.id.toString();

  return (
    <View style={styles.homeContainer}>
      <View style={styles.bottomHeader}>
        <View style={styles.bottomHeaderContent}>
          <Text style={styles.editText}>Toplu Mesaj Listeleri</Text>
          <Text style={styles.editText}>Yeni Grup</Text>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <FlatList
          keyExtractor={keyExtractorChat}
          data={chat_data}
          renderItem={renderChat}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#FFF',
  },
  chatContainer: {
    backgroundColor: '#FFF',
    height: '100%',
    paddingHorizontal: 18,
  },
  bottomHeader: {
    width: '100%',
    marginBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#c4c4c4',
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
  },
  bottomHeaderContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 5,
  },
  editText: {
    fontSize: 14,
    color: '#2385E1',
  },
});

export default HomeScreen;
