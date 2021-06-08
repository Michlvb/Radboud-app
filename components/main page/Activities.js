import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {getActivity} from '../firebase/firebase.utils'

export default function ShowActivity (props){
    
    if(props.activity == null){
        return (
            <View style={styles.screen}>
                <Text>Loading</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.screen}>
                <Text style={styles.text}>Activiteiten</Text>
                <View>
                    <FlatList 
                        data={props.activity} 
                        keyExtractor={(item,index) => {return item.id}}
                        renderItem={({item}) => (
                            <View style={styles.listItem}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text>{item.id}</Text> 
                                    <Text>{item.date}</Text>
                                </View>
                                <Text>{'\n' + item.msg}</Text>
                            </View>
                        )}
                        />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        padding: 30
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
    text: {
        fontWeight: 'bold',
    }
})
