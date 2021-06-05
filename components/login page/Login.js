import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, TextInput, Text, Button, Platform} from "react-native";
import {AddUser} from '../firebase/firebase.utils'
import {Picker} from '@react-native-picker/picker'


export default function Login(props){
    
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const departments = ["Anatomie", "Anesthesiologie, Pijn en Palliatieve Geneeskunde", "Apotheek", "Cardiologie", 
                        "Cardio-thoracale Chirurgie", "Chirurgische Dagbehandeling", "Cognitive Neuroscience",
                        "Dermatologie", "Eerstelijnsgeneeskunde", "Fysiologie", "Fysiotherapie", "Geestelijke verzorging en Pastoraat",
                        "Genetica", "Geriatrie", "Health Evidence", "Heelkunde", "Hematologie", "Intensive Care", "Interne Geneeskunde",
                        "IQ healthcare", "Keel-Neus-Oorheelkunde", "Laboratorium-geneeskunde", "Longziekten", "Maag-, Darm- en Leverziekten",
                        "Medische Microbiologie", "Medische Oncologie", "Medische Psychologie", "Mobiel Medisch Team", "Mond-Kaak-Aangezichts-chirurgie",
                        "Mortuarium", "Neonatologie", "Neurochirurgie", "Neurologie", "Nierziekten", "Oogheelkunde", "Operatiekamers", "Orthopedie", "Pathologie",
                        "Plastische Chirurgie", "Psychiatrie", "Radiologie en Nucleaire Geneeskunde", "Radiotherapie", "Reumatische Ziekten", "Revalidatie", "Spoedeisende Hulp",
                        "Tandheelkunde", "Urologie", "Verloskunde en Gynaecologie"]

                        
    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.mainPage}>
                <Text style={styles.text}>Gebruikersnaam</Text>
                <TextInput style={styles.input} onChangeText={(text) => setName(text.toLowerCase())} ></TextInput>
                <Text style={styles.text}>Afdeling</Text>
                <Picker
                style={styles.picker}
                selectedValue={department}
                onValueChange={(item) => setDepartment(item)}
                >
                {departments.map((val, index) => {
                    return <Picker.Item label={val} key={index} value={val}/>
                })}
                </Picker>
                <Button 
                title="Submit"
                onPress={() => 
                    AddUser(name, department.toLowerCase())
                    .then((answer) => {
                        if(answer) props.navigation.navigate('Home')
                        else console.log(answer)
                    })
                    }>
                </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    text: {
        marginLeft: 12
    },
    submit: {
        position: 'absolute',
        bottom: 10,
        left: 0,
    },
    picker: {
        marginBottom: Platform.OS === "android" ? 100 : 170,
        marginTop: Platform.OS === "android" ? 100 : -10,
        marginLeft:Platform.OS === "android" ? 100 : 50,
        height: Platform.OS === "android" ? 50 : 50,
        width: Platform.OS === "android" ? 250 : 250,
        backgroundColor: Platform.OS === "android" ? "blue" : 'transparent'
    }
})