import React, { Component, useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import {getUsersFromDepartment} from '../firebase/firebase.utils'

export const showScores = (props) => {

    let [usersFromDepartment, setPeople] = useState(null)
    
    useEffect(() => {
        const GetUsers = async () => {
        try {
            const data = await getUsersFromDepartment('anatomie')
            setPeople(data)
        } catch(error) {
            console.log("Error fetching users " + error)
        }}
        GetUsers()
    }, [])

    const Header = () => {
        return (
            <View style={styles.header}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Scorebord</Text>
                <Text style={{left: 90, color: 'white'}}>Score</Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <Header />
            {/* <FlatListItem users={usersFromDepartment}/> */}
            <FlatList
                     data={usersFromDepartment}
                     keyExtractor={(item, index) => {return item.name}}
                     renderItem={({item}) => (
                        <View style={styles.listItem}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text>{item.name}</Text> 
                                    <Text>{item.score}</Text>
                                </View>
                        </View>
                     )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#add8e6',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    listItem : {
        padding: 10,
        textAlign: 'center',
        marginVertical: 10,
        backgroundColor: 'white',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        color: 'blue'
    },
})



export default showScores;