import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class EmptyScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{justifyContent: 'center', height: '100%'}}>
                    <Text style={{alignSelf: 'center'}}>Klaar om te fietsen naar het RadboudUMC?</Text>
                    <TouchableOpacity style={styles.root} onPress={() => props.navigation.navigate('Maps')} >
                    </TouchableOpacity>

                    <Button
                        title="Start trip"
                        onPress={() => this.props.navigation.navigate('Maps')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

