import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, StatusBar, View, Button, TouchableOpacity } from 'react-native';
import Navbar from './components/Navbar' ;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainPage}>
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
});
