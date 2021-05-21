import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';

import RunInfo from './run-info';
import RunInfoNumeric from './run-info-numeric';

// import Constants from 'expo-constants';
// import * as Location from 'expo-location';


export default class mapScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {};

      setInterval(() => {
       this.distanceInfo.setState({value: Math.random() * 100}); 
       this.speedInfo.setState({value: Math.random() * 15}); 
       this.directionInfo.setState({
         value: this.directionInfo.state === 'N' ? 'NW' : 'N'}); 
      }, 1000);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView style={styles.map}
                  showsUserLocation
                  followsUserLocation
                  initialRegion={{
                    latitude: 37.33307,
                    longitude: -122.0324,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02
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
  map: {
    ...StyleSheet.absoluteFillObject
  }
});