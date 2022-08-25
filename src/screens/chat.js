import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';
import ChatHeader from '../components/ChatHeader';
import chat_data from '../data/chatList.json';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import MessageItem from '../components/MessageItem';

const ChatScreen = ({route, navigation}) => {
  const {userID} = route.params;
  const user = chat_data.find(item => item.id === userID);
  const userName = user.receiver.firstName + ' ' + user.receiver.lastName;
  const renderText = ({item}) => <MessageItem message={item} />;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <ChatHeader userName={userName} userProfile={user.avatar} />
      ),
    });
  }, [navigation, userName, user.avatar]);

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/85/04/30/850430a750fb80c1ebaa5e740fc7cbd6.jpg',
      }}
      style={styles.chatContainer}>
      <View style={styles.chatView}>
        <FlatList
          style={styles.chatTextList}
          data={user.messages}
          renderItem={renderText}
        />
      </View>
      <View style={styles.bottomArea}>
        <Icon
          style={styles.bottomAreaIcon}
          name="add"
          size={30}
          color="#2385E1"
        />
        <TextInput style={styles.input} label="Email" />
        <Icon
          style={styles.bottomAreaIcon}
          name="ios-camera-outline"
          size={30}
          color="#2385E1"
        />
        <Icon
          style={styles.bottomAreaIcon}
          name="mic-outline"
          size={30}
          color="#2385E1"
        />
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
  chatView: {
    paddingBottom: 75,
  },
  chatTextList: {
    height: '100%',
  },
  bottomArea: {
    position: 'absolute',
    bottom: 0,
    right: 0,
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
    marginLeft: 8,
  },
});

export default ChatScreen;
