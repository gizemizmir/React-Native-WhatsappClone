import React from 'react';
import {View, Text} from 'react-native';
import styles from './MessageItem.style';
import Icon from 'react-native-vector-icons/dist/Ionicons';

// MessageItem is used to list the message on the Chat Screen
const MessageItem = ({message}) => {
  return message.status === 'send' ? (
    <View style={styles.sendMessage}>
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
      <View style={styles.messageIcon}>
        <Text style={styles.messageDate}>{message.date}</Text>
        <Icon name="checkmark-done" size={15} color="#2385E1" />
      </View>
    </View>
  ) : (
    <View style={styles.receiveMessage}>
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
      <View style={styles.messageIcon}>
        <Text style={styles.messageDate}>{message.date}</Text>
      </View>
    </View>
  );
};

export default MessageItem;
