import React, {Component, useEffect} from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, TextInput, Text, Button} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getData = async () => {
    try {
        const name = await AsyncStorage.getItem("@key")
        const val = await AsyncStorage.getItem("@value")
        const score = await AsyncStorage.getItem("@score")
        return name !== null ?  [name, val, score]: null
    } catch (e) {
        console.log("No value found: ", e);
        return null;
    }
}

export const storeData = async (name, department, score) => {
    try {
        await AsyncStorage.setItem("@key", name);
        await AsyncStorage.setItem("@value", department);
        await AsyncStorage.setItem("@score", score);
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