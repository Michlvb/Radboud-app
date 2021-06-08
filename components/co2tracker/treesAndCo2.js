import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import sharedStyles from '../maps/shared-styles';

export default class TreesAndCo2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.headTextBox}>
                    <Text style={styles.headerText}>Door te fietsen ben je niet alleen gezond bezig, je doet ook nog eens het werk van bomen.</Text>
                    <Text style={styles.headerText}>De fiets heeft namelijk geen uitstoot. Je zorgt voor minder CO2 in de lucht!</Text>
                </View>
                <Image style={styles.treeImage} source={require('../../assets/tree.png')} />
                <View style={styles.lowerTextBox}>
                    <Text style={styles.lowerText}>Je hebt zoveel gefietst dat je het werk van 20 bomen hebt gedaan!</Text>
                    <Text style={styles.lowerText}>In totaal heb je 180kg CO2 bespaard.</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#7B8CDE',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    treeImage: {
        width: '55%',
        height: '40%',
    },
    treesCo2: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    headerText: {
        fontSize: 16,
    },
    headTextBox: {
        flex: 1,
        marginBottom: 50,
        width: '90%',
        padding: 10,
        textAlign: 'center',
        marginVertical: 10,
        backgroundColor: 'white',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.3
    },
    lowerTextBox: {
        flex: 2,
        width: '90%',
    },
    lowerText: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    }

})