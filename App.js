import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Button, TouchableOpacity, ImageBackground } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login page/Login'
import CameraComp from './components/Camera'
import Home from './components/main page/Home'

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Login navigation={navigation}/>
    </SafeAreaView>
  )
}


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={CameraComp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B8CDE',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
})
