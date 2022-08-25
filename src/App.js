import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ChatScreen from './screens/chat';
import HomeScreen from './screens/home';
import HomeHeader from './components/homeHeader';

const StackNav = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#F6F6F6',
          },
        }}>
        <StackNav.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <HomeHeader />,
            headerStyle: {height: 130},
          }}
        />
        <StackNav.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerStyle: {height: 90},
          }}
        />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default App;
