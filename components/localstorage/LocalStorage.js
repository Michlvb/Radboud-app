import React, {Component, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, TextInput, Text, Button} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getData = async () => {
    try {
        const val = await AsyncStorage.getItem("@key")
        const ww = await AsyncStorage.getItem("@value")
        return val !== null ? val : null
    } catch (e) {
        console.log("No value found: ", e);
        return null;
    }
}

export const storeData = async (name, department) => {
    try {
        await AsyncStorage.setItem("@key", name);
        await AsyncStorage.setItem("@value", department);
        console.log("Done");
    } catch (e){
        console.log("error: ", e);
    }
}

//For testing
export const removeItem = async () => {
    try {
        await AsyncStorage.removeItem("@key")
        await AsyncStorage.removeItem("@value")
        console.log("Done")
    } catch (e){
        console.log(e);
    }
}

export default storeData;