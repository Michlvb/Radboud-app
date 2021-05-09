import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

import {storeHighScore} from './components/firebase.utils'

import ShowActivity from './components/Activities'
import Header from './components/Header'
import CameraComp from './components/Camera'

export default function App() {

  function pushButton() {
    storeHighScore("Michaël", 10)
  }


  return (
    <View>
      {/* <ImageBackground source={require('./assets/img.jpg')} style={styles.image}>
        <Header />
        <ShowActivity />
      </ImageBackground> */}
      {/* <Button title="Hello world" onPress={pushButton}></Button> */}
      {/* <CameraComp /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: null,
    height: null
  }
});
