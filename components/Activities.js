import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';


export default function ShowActivity (){
    const listOfActivities = [{id: "1", title:"Fietsen", text: "Goedzo! Je hebt vandaag de fiets gepakt in plaats van de auto"},
                              {id: "2", title:"Afval", text: "Klik, met de camera heb je iets juist weg gegooid. Dat kan nu mooi gerecyled worden."},
                              {id: "3", title:"Scorebord", text: "Goed bezig! Je staat op plek 3 van alle medewerkers van jouw afdeling!"}] //Eventually, get this from a db
    //listOfActivities is a dictionary/object
    
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Activiteiten</Text>
            <View>
                <FlatList 
                    data={listOfActivities} 
                    renderItem={itemData => (
                        <View style={styles.listItem}>
                            <Text>{itemData.item.title}</Text>
                            <Text>{'\n' + itemData.item.text}</Text>
                        </View>
                    )}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
        top: 70
    },
    listItem : {
        padding: 5,
        textAlign: 'center',
        marginVertical: 10,
        backgroundColor: 'white',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: "#000000",
        shadowOpacity: 0.3
    },
    text: {
        fontWeight: 'bold',

    }
})
