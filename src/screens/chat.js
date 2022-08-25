import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ChatHeader from '../components/chatHeader';
import chat_data from '../data/chatList.json'

const ChatScreen = ({ route, navigation }) => {
    const { userID } = route.params;
    const user = chat_data.find(item => item.id === userID);
    const userName = user.receiver.firstName + ' ' + user.receiver.lastName

    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerTitle: () => <ChatHeader userName={userName} userProfile={user.avatar} />
      });
    }, [navigation]);
  return (
    <View style={styles.imageContainer}>
     <Text>{user.messages[user.messages.length -1].text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {},
});

export default ChatScreen;
