import React,  {useState, useEffect}  from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    const name = "Michaël" //Get name from db
    const date = new Date()
    const hour = date.getHours()

    let [welcomemsg, setMsg] = useState("")

    function getCurrentTime(){
        if(hour > 6 && hour < 12) {
            setMsg("Goedemorgen")
        } else if (hour < 18) {
            setMsg("Goedemiddag")
        } else {
            setMsg("Goedenavond")
        }
    }

    useEffect(() => {
        getCurrentTime()
    })
    

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.header}>
                    {welcomemsg + ", " + name + ".\nEen beter milieu begint bij jezelf!"}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 30
    },
    header: {
        color: 'white'
    }
})