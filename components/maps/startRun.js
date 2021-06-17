import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';




export const EmptyScreen = ({route, navigation}) => {
    const {name, dep} = route.params
    return(
        <View style={styles.root}>
                <View style={{justifyContent: 'center', height: '100%'}}>
                    <Text style={styles.text}>Klaar om te fietsen naar het RadboudUMC?</Text>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity
                            style={styles.button}
                            title="Start trip"
                            onPress={() => navigation.navigate('Maps', {
                                name: name,
                                dep: dep
                            })}
                        >
                            <Text style={styles.buttonText}>Start!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#7B8CDE',
        alignItems: 'center',
        justifyContent: 'center',
      },
    text: {
        margin: 30,
        textAlign: 'center',
        fontSize: 24,
    },
    buttonText: {
        fontSize: 24,
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
        width: '60%',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
  });

export default EmptyScreen;
