import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { mapStyle } from './mapStyle';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        showsUserLocation={true}
        followsUserLocation={true}
        mapType="standard"
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});