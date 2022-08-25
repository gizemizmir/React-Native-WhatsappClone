import React from 'react';
import {View, Text} from 'react-native';
import styles from './HomeHeader.style';
import Icon from 'react-native-vector-icons/dist/Feather';

// HomeHeader is used to Home Screen
const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.topHeader}>
        <Text style={styles.editText}>Düzenle</Text>
        <Icon name="edit" size={20} color="#2385E1" />
      </View>
      <Text style={styles.title}>Sohbetler</Text>
    </View>
  );
};

export default HomeHeader;
