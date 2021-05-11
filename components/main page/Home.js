import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import Navbar from '../navbar/Navbar'
import ShowActivity from './Activities'
import Header from './Header'

function Home(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainPage}></View>
            <Header />
            <ShowActivity />
            <Navbar navigation={props.navigation}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
      container: {
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
  },
})
export default Home;