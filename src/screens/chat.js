import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ChatHeader from '../components/chatHeader';

const ChatScreen = ({ route, navigation }) => {
    const { paramName, image } = route.params;
    navigation.setOptions({headerTitle: () => <ChatHeader name={paramName} profile={image}/>})
  return (
    <View style={styles.imageContainer}>
     <Text>{paramName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {},
});

export default ChatScreen;
