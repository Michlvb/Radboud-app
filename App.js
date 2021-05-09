import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, View, Button, TouchableOpacity, ImageBackground } from 'react-native';

import {storeHighScore} from './components/firebase.utils'

import ShowActivity from './components/Activities'
import Header from './components/Header'
import CameraComp from './components/Camera'
import Navbar from './components/Navbar' ;
export default function App() {

  function pushButton() {
    storeHighScore("Michaël", 10)
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainPage}>
      {/* <ImageBackground source={require('./assets/img.jpg')} style={styles.image}>
        <Header />
        <ShowActivity />
      </ImageBackground> */}
      {/* <Button title="Hello world" onPress={pushButton}></Button> */}
      {/* <CameraComp /> */}
      </View>
        <Navbar />
    </SafeAreaView>
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
