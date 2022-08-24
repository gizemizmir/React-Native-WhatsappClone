import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import ChatScreen from './src/screens/chat';
import HomeScreen from './src/screens/home';
import HomeHeader from './src/components/homeHeader';

const StackNav = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator
        screenOptions={{
            headerBackTitleVisible: false,
            tabBarStyle: {
                backgroundColor: '#F6F6F6',
                borderTopColor: '#A6A6AA'
            },
            headerStyle: {
                backgroundColor: '#F6F6F6',
            },
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: '#8D8D8F'
        }}
      >
        <StackNav.Screen name='Home' component={HomeScreen} options={{
          headerTitle: () => (
            <HomeHeader />
          ),
          headerStyle: {height: 130}
        }}/>
        <StackNav.Screen name='Chat' component={ChatScreen} options={{
          headerStyle: {height: 90}
        }}/>
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {},
});

export default App;
