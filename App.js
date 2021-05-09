import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import Home from './components/main page/Home'
import Login from './components/login page/Login'
export default function App() {

  function pushButton() {
    storeHighScore("Michaël", 10)
  }


  return (
    <SafeAreaView style={styles.container}>
      <Login />
      {/* <Home /> */}
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
});
