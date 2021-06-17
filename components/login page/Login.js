import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, TextInput, Text, Button, Platform, TouchableOpacity} from "react-native";
import {AddUser} from '../firebase/firebase.utils'
import {Picker} from '@react-native-picker/picker'
import { Entypo } from '@expo/vector-icons'; 


export default function Login(props){
    
    const departments = ["Anatomie", "Anesthesiologie, Pijn en Palliatieve Geneeskunde", "Apotheek", "Cardiologie", 
                        "Cardio-thoracale Chirurgie", "Chirurgische Dagbehandeling", "Cognitive Neuroscience",
                        "Dermatologie", "Eerstelijnsgeneeskunde", "Fysiologie", "Fysiotherapie", "Geestelijke verzorging en Pastoraat",
                        "Genetica", "Geriatrie", "Health Evidence", "Heelkunde", "Hematologie", "Intensive Care", "Interne Geneeskunde",
                        "IQ healthcare", "Keel-Neus-Oorheelkunde", "Laboratorium-geneeskunde", "Longziekten", "Maag-, Darm- en Leverziekten",
                        "Medische Microbiologie", "Medische Oncologie", "Medische Psychologie", "Mobiel Medisch Team", "Mond-Kaak-Aangezichts-chirurgie",
                        "Mortuarium", "Neonatologie", "Neurochirurgie", "Neurologie", "Nierziekten", "Oogheelkunde", "Operatiekamers", "Orthopedie", "Pathologie",
                        "Plastische Chirurgie", "Psychiatrie", "Radiologie en Nucleaire Geneeskunde", "Radiotherapie", "Reumatische Ziekten", "Revalidatie", "Spoedeisende Hulp",
                        "Tandheelkunde", "Urologie", "Verloskunde en Gynaecologie"]

    const [name, setName] = useState("");
    const [department, setDepartment] = useState(departments[0]);
                        
    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.mainPage}>
                <Text style={styles.text}>Gebruikersnaam</Text>
                <TextInput style={styles.input} onChangeText={(text) => setName(text.toLowerCase())} ></TextInput>
                <Text style={styles.text}>Afdeling</Text>
                <View style={{backgroundColor: 'white', margin: 12, alignItems: 'center', borderWidth: 1}}>
                    <Picker
                    style={styles.picker}
                    selectedValue={department}
                    onValueChange={(item) => setDepartment(item)}
                    >
                    {departments.map((val, index) => {
                        return <Picker.Item label={val} key={index} value={val}/>
                    })}
                    </Picker>
                </View>
                <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                style={styles.button}
                onPress={() => 
                    AddUser(name, department.toLowerCase())
                    .then((answer) => {
                        if(answer) props.navigation.navigate('Home')
                        else console.log(answer)
                    })
                    }>
                <Text style={{fontSize: 20}}>Maak account</Text>
                <Entypo name="arrow-long-right" size={24} color="black" />
                </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7B8CDE',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
        paddingLeft: 10,
        paddingRight: 10,
    },
    mainPage: {
        borderRadius: 20,
        marginBottom: 5,
        justifyContent: 'center'
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
    input: {
        backgroundColor: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    text: {
        marginLeft: 12,
        fontSize: 18
    },
    submit: {
        position: 'absolute',
        bottom: 10,
        left: 0,
    },
    picker: {
        backgroundColor: 'red',
        fontSize: 20,
        marginBottom: Platform.OS === "android" ? 20 : 170,
        marginTop: Platform.OS === "android" ? 20 : -10,
        height: Platform.OS === "android" ? 40 : 50,
        width: Platform.OS === "android" ? 100 : 250,
        //backgroundColor: Platform.OS === "android" ? "blue" : 'transparent'
    }
})