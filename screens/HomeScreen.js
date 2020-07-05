import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-maps'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

import { DestinationButton } from '../components/DestinationButton'
import { CurrentLocationButton } from '../components/CurrentLocationButton'

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

  render() {
    return (
      <View style={styles.container}>
        <DestinationButton />
        <CurrentLocationButton />
        <MapView
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          style={{flex: 1}}
        />
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
