import React, {useEffect, Component} from 'react'
import { SafeAreaView, Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// // import { openDatabase } from 'react-native-sqlite-storage'
import * as SQLite from 'expo-sqlite'

export let db = SQLite.openDatabase({name: "testDb.db"}); //Creating a DB if it doesn't exist, and return a DB object.
// //https://docs.expo.io/versions/latest/sdk/sqlite/ <- for documentation

// export const createTable = () => {
//     console.log("Hello")
// }


export default function SetDB() {
    useEffect(() => {
        db.transaction(function (txn) {
            txn.executeSql('create table if not exists account (id integer primary key not null, name text, balance int);',[],()=>console.log("created"),(a,b)=>console.log(b)
            );
        txn.executeSql(
            'create table if not exists test(id integer primary key not null, relatedAccount_id int, type int, amount int );'
        )
    })})
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text>Click here to Create SQLite databae</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

// const styles = StyleSheet.create({
//     touchableOpacity: {
//         backgroundColor: '#1B5E20',
//         alignItems: 'center',
//         borderRadius: 8,
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%'
//     }    
// })