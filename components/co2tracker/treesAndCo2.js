import * as React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import sharedStyles from '../maps/shared-styles';

export default class TreesAndCo2 extends React.Component {
    constructor(props) {
        super(props);
        this.trees = 2;
        this.state = {};
    }
    
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.headTextBox}>
                    <Text style={styles.headerText}>Door te fietsen ben je niet alleen gezond bezig, maar ook milieuvriendelijk!</Text>
                    <Text style={styles.headerText}>Een fiets stoot geen CO2 uit, er komt dus minder CO2 in de lucht.</Text>
                    <Text style={styles.headerText}>Bomen filteren de lucht, maar als er minder wordt uitgestoten, hoeven de bomen ook minder te filteren. Bedankt voor je inzet!</Text>
                    <Text style={styles.headerText, {fontWeight: 'bold'}}>Door met de fiets te gaan heb je ondertussen ook het werk verricht van: </Text>
                </View>
                <View style={styles.middleBox}>
                <Text style={styles.middleBoxText}>{this.trees}</Text>
                <Image style={styles.treeImage} source={require('../../assets/tree.png')} />
                </View>
                <View style={styles.lowerTextBox}>
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
    middleBox: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleBoxText: {
        fontSize: 200,
    },
    treeImage: {
        width: '55%',
        height: '100%',
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
        flex: 2,
        marginBottom: 50,
        width: '90%',
        padding: 10,
        textAlign: 'center',
        marginTop: 20,
        backgroundColor: 'white',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.3
    },
    lowerTextBox: {
        flex: 1,
        width: '90%',
    },
    lowerText: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    }

})