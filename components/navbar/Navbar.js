import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import NavButton from './NavButton';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.navBar}>
                <NavButton icon="home" navigation={this.props.navigation}/>
                <NavButton icon="bicycle" navigation={this.props.navigation} name={this.props.name} dep={this.props.dep}/>
                <NavButton icon="camera" navigation={this.props.navigation}/>
                <NavButton icon="molecule-co2" navigation={this.props.navigation}/>
                <NavButton icon="score" navigation={this.props.navigation}/>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    navBar: {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 5,
        flexDirection: 'row',
        shadowOffset: { wdith: 0, height: 10 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        shadowColor: 'red',
  },
});
export default Navbar;