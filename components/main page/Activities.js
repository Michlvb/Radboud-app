import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {getActivity} from '../firebase/firebase.utils'

export default function ShowActivity (props){
    

    const [listOfActivities, setList] = useState()
    
    useEffect(() => {
        const fetchData = async () =>{
            const data = await getActivity(props.name,props.dep)
            setList(data)
          }
          fetchData()
    }, [])


    if(listOfActivities == null){
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
                        data={listOfActivities} 
                        keyExtractor={(item, index) => item.key}
                        renderItem={({item}) => (
                            <View style={styles.listItem}>
                                <Text>{item.msg}</Text>
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
