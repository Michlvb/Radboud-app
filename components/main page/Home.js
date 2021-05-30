import React, {Component} from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import Navbar from '../navbar/Navbar'
import ShowActivity from './Activities'
import Header from './Header'

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: this.props.name,
            department:  this.props.dep,
            score: this.props.score
        }
    }
    
    render()
    {
        return (
            <SafeAreaView style={styles.container}>
                <Header username={this.state.username}/>
                <ShowActivity />
                <Navbar navigation={this.props.navigation}/>
            </SafeAreaView>
        )
    };
}
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#7B8CDE',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
        paddingLeft: 10,
        paddingRight: 10,
  },
})