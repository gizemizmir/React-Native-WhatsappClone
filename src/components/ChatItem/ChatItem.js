import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './ChatItem.style';
import Icon from 'react-native-vector-icons/dist/Ionicons';

// ChatItem is used to list the chats on the Home Screen
const Chat = ({chat}) => {
  const {navigate} = useNavigation();
  const name = chat.receiver.firstName + ' ' + chat.receiver.lastName;
  const lastMessage = chat.messages[chat.messages.length - 1];

  return (
    <View style={styles.chatContainer}>
      <Pressable
        style={styles.chatItem}
        onPress={() => {
          navigate('Chat', {userID: chat.id});
        }}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.profileImage} source={{uri: chat.avatar}} />
        </View>
        <View style={styles.chatContent}>
          <View style={styles.chatInfo}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.text}>{lastMessage.date}</Text>
          </View>
          <Text style={styles.text} numberOfLines={1} lineBreakMode="tail">
            {lastMessage.status === 'send' ? (
              <Icon name="checkmark-done" size={15} color="#2385E1" />
            ) : (
              ''
            )}
            {' ' + lastMessage.text}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Chat;
