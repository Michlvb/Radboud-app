import React, { Component, useState, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {getAllUsersFromDepartmentsOrDepartment} from '../firebase/firebase.utils'

export const showScores = (props) => {

    const [usersFromDepartment, setPeople] = useState(null)
    const [Switch, setSwitch] = useState(true)
    const [allDepartments, setAllDepartments] = useState(null)


    useEffect(() => {
        const GetUsers = async () => {
        try {
            const data = await getAllUsersFromDepartmentsOrDepartment(props.route.params.dep)
            const allDeps = await getAllUsersFromDepartmentsOrDepartment()
            setPeople(data)
            setAllDepartments(allDeps)
        } catch(error) {
            console.log("Error fetching users " + error)
        }}
        GetUsers()
    }, [])

    const Header = (props) => {
        return (
            <View style={styles.header}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>{props.afdeling}</Text> 
                <Text style={{color: 'black'}}>Score</Text>
            </View>
        )
    }
    
    return (
        <SafeAreaView style={{backgroundColor: "#7B8CDE", flex: 1}}>
            <Header afdeling={Switch ? (props.route.params.dep[0].toUpperCase() + props.route.params.dep.substring(1)): "Afdelingen"}/>
                <FlatList
                    data={Switch ? usersFromDepartment : allDepartments}
                    keyExtractor={(item) => {return item.name}}
                    renderItem={({item}) => (
                    <View style={styles.listItem}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>{item.name}</Text>
                            <Text>{item.score}</Text>
                        </View>
                    </View>
            )}/>
        <TouchableOpacity style={styles.button} onPress={() => Switch ? setSwitch(false) : setSwitch(true)}><Text>{Switch ? "Alle afdelingen" : "Eigen afdeling"}</Text></TouchableOpacity>
        </SafeAreaView>
    )
     
}

const styles = StyleSheet.create({
    header: {
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 10,
        marginTop: 10,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        marginBottom: 20,
        backgroundColor: 'lightgreen',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 150,
        height: 30,
        left: 100,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,

    },
    listItem : {
        marginHorizontal: 10,
        padding: 10,
        textAlign: 'center',
        marginVertical: 10,
        backgroundColor: 'lightgreen',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        color: 'blue'
    },
})



export default showScores;