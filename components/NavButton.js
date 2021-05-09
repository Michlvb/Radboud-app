import 'react-native-gesture-handler';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function NavButton(props) {
    console.log()
    if(props.icon === "home"){
        return (
            <TouchableOpacity style={styles.navButton}>
                <Entypo name={props.icon} size={24} color="black" />
            </TouchableOpacity>
        );
    } else if ( props.icon === "camera"){
        return (
            <TouchableOpacity style={styles.navButton} onPress={() => props.navigation.navigate('Camera')}>
                <Entypo name={props.icon} size={24} color="black" />
            </TouchableOpacity>
        );
    } 
    else if (props.icon === "bicycle"){
        return (
            <TouchableOpacity style={styles.navButton} >
                <Ionicons name={props.icon} size={24} color="black" />
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity style={styles.navButton}>
                <MaterialCommunityIcons name={props.icon} size={24} color="black" />
            </TouchableOpacity>
        );
    }
}

export default NavButton;
const styles = StyleSheet.create({
  navButton: {
    backgroundColor: 'lightgreen',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    //margin: 10,

  },
});