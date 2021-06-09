import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Button, Text, View, Dimensions, TouchableOpacity} from 'react-native';

import MapView, { Marker, Polyline } from 'react-native-maps';
import haversine from 'haversine';

import RunInfo from './run-info';
import RunInfoNumeric from './run-info-numeric';

import * as Location from 'expo-location';

import {updateDistance} from '../firebase/firebase.utils'

let id = 0;

export default class mapScreen extends Component {
  _IsMounted = false
  constructor(props) {
    super(props);
    this.state = {markers: [],
        mapRegion: null,
        hasLocationPermissions: false,
        locationResult: null,
        name: this.props.route.params.name,
        dep: this.props.route.params.dep
    };
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
    this.getLocationAsync()
  }

  componentWillUnmount() {
    //this.watchID.remove();
    console.log("component willunmount and removed watchid")
  }
  
  handleMapRegionChange = (mapRegion) => {
    this.setState({ mapRegion });
  };
  
  
  async getLocationAsync() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      this.setState({ hasLocationPermissions: true });
      const location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: location});
      this.setState({
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        },
      });
      this.watchID = await Location.watchPositionAsync(
        { accuracy: 6, timeInterval: 500, distanceInterval: 0 },
        (locationResult) => {
          let distance = 0;
  
  
          if (locationResult.coords.speed <= 26){
            if (this.state.previousCoordinate) {
              distance = this.state.distance + haversine(this.state.previousCoordinate, locationResult.coords, {unit: 'meter'});
              this.distanceInfo.setState({ value: distance});
            }
          }
  
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
  
          this.setState({
            previousCoordinate: locationResult.coords,
            distance
          })
        }
      );
    } else {
      alert("Location permission not granted");
    }
  }
  
    render() {
        return (
            <View style={{flex: 1}}>
              <View style={styles.topBar}>
              
                <TouchableOpacity style={styles.root} onPress={() => updateDistance(this.state.name, this.state.dep, this.state.distance).then(this.props.navigation.popToTop())} >
                  <Text>beëindig reis</Text>
                </TouchableOpacity>
              </View>
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
                    <RunInfoNumeric title="Distance" unit="m"
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
  root: {
    paddingTop: 15,
    position: 'absolute',
    flex: 1
  },
  topBar: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    height: 52,
    backgroundColor: '#7B8CDE',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15
  }
});