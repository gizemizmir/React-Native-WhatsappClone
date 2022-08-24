import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ChatScreen = ({ route }) => {
    const { paramName } = route.params;

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
