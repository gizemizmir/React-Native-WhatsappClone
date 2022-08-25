import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';

const chatHeader = ({userName, userProfile}) => {
  return (
    <View style={styles.header}>
        <View style={styles.leftHeader}>
            <Image style={styles.userImage} 
                source={{
                    uri: userProfile,
                }} />
            <Text style={styles.title}>{userName}</Text>
        </View>
        <View style={styles.rightHeader}>
            <Icon style={styles.icon} name="video" size={20} color="#2385E1" />
            <Icon name="phone" size={20} color="#2385E1" />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
    borderColor: '#bcbcbc',
    borderWidth: 1,
  },
});

export default chatHeader;
