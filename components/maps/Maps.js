import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView from 'react-native-maps';

import RunInfo from './run-info';
import RunInfoNumeric from './run-info-numeric';

import * as Permissions from 'expo-permissions';
import Constants from "expo-constants";
import * as Location from 'expo-location';

export default class mapScreen extends Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
  };

  componentDidMount() {
    this.getLocationAsync();
  }

  handleMapRegionChange = (mapRegion) => {
    this.setState({ mapRegion });
  };

  async getLocationAsync() {
    // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      this.setState({ hasLocationPermissions: true });
      //  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      const location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: JSON.stringify(location) });
      // Center the map on the location we just fetched.
      this.setState({
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    } else {
      alert("Location permission not granted");
    }
  }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                  style={styles.mapStyle}
                  region={this.state.mapRegion}
                  onRegionChange={this.handleMapRegionChange}
                  showsUserLocation

                  initialRegion={{
                    latitude: 51.924419,
                    longitude: 4.477733,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}

                />
                <View style={styles.infoWrapper}>
                    <RunInfoNumeric title="Distance" unit="km"
                      ref={(info) => this.distanceInfo = info}
                    />
                    <RunInfoNumeric title="Speed" unit="km/h" 
                      ref={(info) => this.speedInfo = info}  
                      />
                    <RunInfo title="Direction" 
                      value="NE"
                      ref={(info) => this.directionInfo = info}  
                    />
                </View>
            </View>
            );
    }
}







const styles = StyleSheet.create({
  infoWrapper: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    flex: 1
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});