import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const {navigate, goBack} = useNavigation();
  return (
    <View style={styles.imageContainer}>
     <Text>Home</Text>
     <Pressable onPress={() => {
        navigate('Chat', { paramName: 'Gizem' })
     }}>
         <Text>Zeynap bastık</Text>
     </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {},
});

export default HomeScreen;
