import React, {useEffect, useState} from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import Navbar from '../navbar/Navbar'
import ShowActivity from './Activities'
import Header from './Header'
import {getData} from '../localstorage/LocalStorage'
import {getUserFromDepartment} from '../firebase/firebase.utils'

export const Home = (props) => {

    const [username, setName] = useState(props.name)
    const [department, setDepartment] = useState(props.dep)

    let [score, setScore] = useState(null)
    let [last_distance, setLDistance] = useState(null)
    let [total_co2, setCO2] = useState(null)
    let [total_distance, setTDistance] = useState(null)
    let [activity, setActivity] = useState(null)
    //Find a more efficient way...
    useEffect(() => {
        if(!props.name) {
        const fetchData = async () => {
            const data = await getData()
            setName(data[0])
            setDepartment(data[1])
        }
            fetchData()
        }
        const setValues = async () => {
            const data = await getUserFromDepartment(username, department)
            let {last_distance, score, total_co2, total_distance, activity} = data.val()
            setScore(score);
            setLDistance(last_distance)
            setCO2(total_co2)
            setTDistance(total_distance)
            setActivity(activity)
        }
        setValues()
    }, [])
    
    return (
        <SafeAreaView style={styles.container}>
            <Header username={username}/>
            <ShowActivity activity={activity}/>
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