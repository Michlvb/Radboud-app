import * as React from 'react';
import { View, StyleSheet, Image, Text, Switch } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import sharedStyles from '../maps/shared-styles';

export default class TreesAndCo2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            yearly: false,
            co2: 0,
            trees: 0,
            last_distance: this.props.route.params.lastdist,
            total_distance: this.props.route.params.totaldist
        };
    }

    componentDidMount() {
        this.distanceToCO2();
    }
    
    distanceToCO2() {
        const uitstootAutoKM = 115 //gram/km
        let afstandKilometer = this.state.total_distance / 1000;
        let voorkomenCO2Uitstoot = afstandKilometer * uitstootAutoKM;
        const bomen = voorkomenCO2Uitstoot / 20;
        this.setState({
            co2: voorkomenCO2Uitstoot,
            trees: bomen
        });
    }

    CO2ToTrees() {
        console.log(this.state.co2)
        const bomen = this.state.co2 / 20;
        this.setState({
            trees: bomen
        });
    }

    CO2ToDatabase() {

    }

    toggleSwitch() {
        let nextState = !this.state.yearly;
        this.setState({
            yearly: nextState
        });
    }

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.headTextBox}>
                    <Text style={styles.headerText}>Door te fietsen ben je niet alleen gezond bezig, maar ook milieuvriendelijk!</Text>
                    <Text style={styles.headerText}>Een fiets stoot geen CO2 uit, er komt dus minder CO2 in de lucht.</Text>
                    <Text style={styles.headerText}>Bomen filteren de lucht, maar als er minder wordt uitgestoten, hoeven de bomen ook minder te filteren. Bedankt voor je inzet!</Text>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Switch 
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={ this.state.yearly ? 'lightgreen' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.toggleSwitch()}
                        value={this.state.yearly}
                    />
                    <Text style={{fontSize: 20}}>{this.state.yearly ? "Besparing op jaarbasis" : "Besparing van de laatste rit"}</Text>
                </View>
                <View style={styles.middleBox}>
                <Text style={{fontSize: 50}}>{this.state.yearly ? (this.state.trees * 260 * 2) : this.state.trees}</Text>
                <Image style={styles.treeImage} source={require('../../assets/tree.png')} />
                </View>
                <View style={styles.middleBox}>
                    <Text style={{fontSize: 50}}>{this.state.yearly ? (this.state.co2 * 260 * 2) : this.state.co2}gr.</Text>
                    <Image style={styles.treeImage} source={require('../../assets/co2.png')} />
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
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    treeImage: {
        resizeMode: 'center',
        width: '40%',
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