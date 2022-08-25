import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ChatHeader.style';
import Icon from 'react-native-vector-icons/dist/Feather';

// ChatHeader is used to Chat Screen
const ChatHeader = ({userName, userProfile}) => {
  return (
    <View style={styles.header}>
      <View style={styles.leftHeader}>
        <Image
          style={styles.userImage}
          source={{
            uri: userProfile,
          }}
        />
        <Text style={styles.title}>{userName}</Text>
      </View>
      <View style={styles.rightHeader}>
        <Icon style={styles.icon} name="video" size={20} color="#2385E1" />
        <Icon name="phone" size={20} color="#2385E1" />
      </View>
    </View>
  );
};

export default ChatHeader;
