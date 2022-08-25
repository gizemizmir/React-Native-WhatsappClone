import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

const homeHeader = () => {
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

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
  topHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  editText: {
    fontSize: 14,
    color: '#2385E1',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default homeHeader;
