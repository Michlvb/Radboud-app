import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';


export default function CameraComp() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    if(hasPermission === null){
        return <View />
    }

    if(hasPermission === false){
        return <Text>No access to camera</Text>
    }

    return (
        <View style={styles.cameraView}>
            <Camera style={styles.camera} type={type} >
              <View>
                <TouchableOpacity 
                 onPress = {() => {
                     setType(
                         type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                     );
                 }}>
                <Text>Flip</Text>
                 </TouchableOpacity>
              </View>
            </Camera>
        </View>
    )
}

const styles = StyleSheet.create({
    cameraView: {
        display: 'flex',
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: 50
      },
    camera : {
        width: 700/2,
        height: 800/2,
        zIndex: 1,
        borderWidth: 0,
        borderRadius: 0,
      }
})