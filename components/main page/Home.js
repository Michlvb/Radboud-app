import React, {useEffect, useState} from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import Navbar from '../navbar/Navbar'
import ShowActivity from './Activities'
import Header from './Header'
import {getData} from '../localstorage/LocalStorage'

export const Home = (props) => {

    const [username, setName] = useState(null)
    const [department, setDepartment] = useState(null)
    let [score, setScore] = useState(null)
    
    //Find a more efficient way...
    useEffect(() => {
        if(!props.name) {
        const fetchData = async () => {
            const data = await getData()
            setName(data[0])
            setDepartment(data[1])
            setScore(data[2])
        }
            fetchData()
        } else {
            setName(props.name)
            setDepartment(props.dep)
            setScore(props.score)
        }
    })
    
    return (
        <SafeAreaView style={styles.container}>
            <Header username={username}/>
            <ShowActivity />
            <Navbar navigation={props.navigation}/>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#7B8CDE',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
        paddingLeft: 10,
        paddingRight: 10,
  },
})

export default Home;