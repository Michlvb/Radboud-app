import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Button, TouchableOpacity, ImageBackground } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login page/Login'
import CameraComp from './components/Camera'
import Home from './components/main page/Home'
import MapScreen from './components/maps/Maps'
import {getData, removeItem} from './components/localstorage/LocalStorage'
import mapScreen from './components/maps/Maps'
import EmptyScreen from './components/maps/startRun'


const Stack = createStackNavigator();


function LoginScreen({navigation}){

  let [user, setUser] = useState(null)
  useEffect(() => {
    const fetchData = async () =>{
      const data = await getData()
      setUser(data)
    }
    fetchData()
  }, [])
 

  return (
    user == null ? 
    <SafeAreaView style={styles.container}>
      <Login navigation={navigation}/>
    </SafeAreaView> :
    <SafeAreaView style={styles.container}>
      <Home navigation={navigation} name={user[0]} dep={user[1]}/>
    </SafeAreaView>
  )
}


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={CameraComp} />
        <Stack.Screen name="Maps" component={mapScreen} />
        <Stack.Screen name="EmptyMap" component={EmptyScreen} />
        
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
