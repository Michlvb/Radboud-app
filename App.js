import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {storeHighScore} from './components/firebase.utils'

import ShowActivity from './components/Activities'
import Header from './components/Header'
import CameraComp from './components/Camera'
import Navbar from './components/Navbar' ;


const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
      <SafeAreaView style={styles.container}>
      <View style={styles.mainPage}>
        <Header />
        <ShowActivity />
      </View>
        <Navbar navigation={navigation}/>
    </SafeAreaView>
  )
}


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
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
  mainPage: {
    flex: 7,
    backgroundColor: '#9999C3',
    borderRadius: 20,
    marginBottom: 5,
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: null,
    height: null
  }
});
