import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import Home from './components/main page/Home'
import Login from './components/login page/Login'
export default function App() {


const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
      {/* <Home /> */}

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
});
