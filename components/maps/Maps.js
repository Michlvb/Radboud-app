import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView, { Marker, Polyline } from 'react-native-maps';

import RunInfo from './run-info';
import RunInfoNumeric from './run-info-numeric';

import * as Permissions from 'expo-permissions';
import Constants from "expo-constants";
import * as Location from 'expo-location';

let id = 0;


export default class mapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {markers: [],
        mapRegion: null,
        hasLocationPermissions: false,
        locationResult: null,
    };

    let watchID = Location.watchPositionAsync(
      { accuracy: 6, timeInterval: 500, distanceInterval: 0 },
      (locationResult) => {
        this.speedInfo.setState({value: locationResult.coords.speed});

        let x = locationResult.coords.heading;
        if ((x > 0 && x <= 23) || (x > 338 && x <= 360))
          this.directionInfo.setState({value: 'N'});
        else if (x > 23 && x <= 65)
        this.directionInfo.setState({value: 'NE'});
        else if (x > 65 && x <= 110)
        this.directionInfo.setState({value: 'E'});
        else if (x > 110 && x <= 155)
        this.directionInfo.setState({value: 'SE'});
        else if (x > 155 && x <= 203)
        this.directionInfo.setState({value: 'S'});
        else if (x > 203 && x <= 248)
        this.directionInfo.setState({value: 'SW'});
        else if (x > 248 && x <= 293)
        this.directionInfo.setState({value: 'W'});
        else if (x > 293 && x <= 338)
        this.directionInfo.setState({value: 'NW'});
      }
    );
  }
    

    addMarker(region){
      let now = (new Date).getTime();
      if (this.state.ladAddedMarker > now - 5000){
        return;
      }

      this.setState({
        markers: [
          ...this.state.markers, {
            coordinate: region,
            key: id++
          }
        ],
        ladAddedMarker: now,
      });
    }

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
      this.setState({ locationResult: location});
      // Center the map on the location we just fetched.
      this.setState({
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
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
                  showsUserLocation
                  followsUserLocation

                  onRegionChange={(region) => this.addMarker(region)}
                  >
                      <Polyline
                      coordinates={this.state.markers.map((marker) => marker.coordinate)}
                      strokeWidth={5}
                      />
                </MapView>
                
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