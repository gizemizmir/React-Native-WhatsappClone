import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const {navigate, goBack} = useNavigation();
  return (
    <View style={styles.imageContainer}>
     <Pressable onPress={() => {
        navigate('Chat', { paramName: 'Hasan', image: 'https://picsum.photos/300/300' })
     }}>
         <Text>Zeynep bastık</Text>
     </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {},
});

export default HomeScreen;
