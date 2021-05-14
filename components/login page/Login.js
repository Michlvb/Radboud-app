import React, {Component, setState} from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, TextInput, Text, Button } from "react-native";
import {AddUser} from '../firebase/firebase.utils'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }
    render() {
        
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.mainPage}>
                    <Text style={styles.text}>Gebruikersnaam</Text>
                    <TextInput style={styles.input} onChangeText={(text) => this.setState({...this, username: text})} ></TextInput>
                    <Text style={styles.text}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true} onChangeText={(text) => this.setState({...this, password: text})}></TextInput>
                    <Button 
                    title="Submit" 
                    onPress={() => 
                        AddUser(this.state.username, this.state.password)
                        .then((answer) => {
                            if(answer) this.props.navigation.navigate('Home')
                            else console.log(answer)
                        })}>
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7B8CDE',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
        paddingLeft: 10,
        paddingRight: 10,
    },
    mainPage: {
        flex: 7,
        backgroundColor: '#9999C3',
        borderRadius: 20,
        marginBottom: 5,
        justifyContent: 'center'
  },
    input: {
        backgroundColor: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
  },
  text: {
        marginLeft: 12
  }
})