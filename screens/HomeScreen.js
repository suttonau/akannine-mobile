import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

import { DestinationButton } from '../components/DestinationButton'
import { CurrentLocationButton } from '../components/CurrentLocationButton'
import Driver from '../components/Driver'

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      region: null,
    }
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
      if (status !== 'granted') 
        console.log('Permission to access location denied')

    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true })
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045
    }
    
    this.setState({ region: region })
  }

  centerMap () {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = this.state.region
    this.map.animateToRegion({ latitude, longitude, latitudeDelta, longitudeDelta })
  }

  render() {
    return (
      <View style={styles.container}>
        <DestinationButton />
        <CurrentLocationButton cb={() => {this.centerMap()} } />
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          style={{flex: 1}}
          ref={(map) => {this.map = map}}
        >

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// {        <Driver driver={{uid: 'null', location: {
//   latitude: 37.78825,
//   longitude: -122.4324
// }}} />}