import React, {useEffect} from 'react';
import {View, StyleSheet, Text, ImageBackground, TextInput, FlatList} from 'react-native';
import ChatHeader from '../components/chatHeader';
import chat_data from '../data/chatList.json';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const ChatScreen = ({route, navigation}) => {
  const {userID} = route.params;
  const user = chat_data.find(item => item.id === userID);
  const userName = user.receiver.firstName + ' ' + user.receiver.lastName;
  const renderText = ({item}) => {
    return (
      item.status === 'send' ? (
        <View style={styles.sendMessage}>
          <View style={styles.messageTextContainer}>
            <Text style={styles.messageText}>
              {item.text} 
            </Text>
          </View>
          <View style={styles.messageIcon}>
            <Text style={styles.messageDate}>{item.date}</Text>
            <Icon name="checkmark-done" size={15} color="#2385E1" />
          </View>
        </View>
      ) : (
        <View style={styles.receiveMessage}>
          <View style={styles.messageTextContainer}>
            <Text style={styles.messageText}>
              {item.text} 
            </Text>
          </View>
          <View style={styles.messageIcon}>
            <Text style={styles.messageDate}>{item.date}</Text>
          </View>
        </View>
      )
    )
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <ChatHeader userName={userName} userProfile={user.avatar} />
      ),
    });
  }, [navigation, userName, user.avatar]);

  return ( 
    <ImageBackground 
      source={{uri: 'https://i.pinimg.com/736x/85/04/30/850430a750fb80c1ebaa5e740fc7cbd6.jpg'}}
      style={styles.chatContainer}
    >    
      <View>
        <FlatList 
          style={styles.chatTextList}
          data={user.messages}
          renderItem={renderText}
        />
      </View>
      <View style={styles.bottomArea}>
        <Icon style = {styles.bottomAreaIcon} name="add" size={30} color="#2385E1" />
        <TextInput
          style = {styles.input}
          label="Email"
        />
        <Icon style = {styles.bottomAreaIcon} name="ios-camera-outline" size={30} color="#2385E1" />
        <Icon style = {styles.bottomAreaIcon} name="mic-outline" size={30} color="#2385E1" />
      </View>
    </ImageBackground> 
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: 'transparent',
    paddingHorizontal: 8,
    paddingVertical: 5,
    height: '100%',
    position: 'relative',
  },
  chatTextList: {
    height: '100%',
  },
  receiveMessage: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    marginVertical: 10,
    maxWidth: '85%',
    borderRadius: 10,
    display: 'flex',
    alignSelf: 'flex-start',
  },
  sendMessage: {
    backgroundColor: '#DCF8C6',
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 20,
    marginVertical: 10,
    maxWidth: '85%',
    display: 'flex',
    alignSelf: 'flex-end',
    borderRadius: 10,
    position: 'relative',
  },
  messageTextContainer: {
    marginRight: 35,
  },
  messageText: {
    color: '#000',
  },
  messageIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageDate: {
    fontSize: 10,
    color: '#000',
    marginRight: 2,
  },
  bottomArea: {
    position: 'absolute',
    bottom:0,
    right:0,
    margin: 0,
    width: '105%',
    height: 80,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    margin: 15,
    marginLeft: 0,
    height: 30,
    width: '65%',
    borderColor: '#c4c4c4',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  bottomAreaIcon: {
    marginTop: 15,
    marginLeft:8,
  }
});

export default ChatScreen;
