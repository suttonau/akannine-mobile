import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const WIDTH = Dimensions.get('window').width

export const DestinationButton = (props) => {
  return(
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <View style={styles.leftColumn}>
        <Text style={{fontSize: 8}}>{'\u25A0'}</Text>
      </View>

      <View style={styles.centerColumn}>
        <Text style={{fontSize: 21, color: '#545454'}}>Where To?</Text>
      </View>

      <View style={styles.rightColumn}>
        <Ionicons name="md-car" color='#000000' size={25} style={{alignSelf: 'center'}} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9,
    position: 'absolute',
    flexDirection: 'row',
    width: (WIDTH-40),
    height: 60,
    top: 110,
    left: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000000',
    elevation: 7,
    shadowRadius: 5,
    shadowRadius: 1
  },
  leftColumn: {
    flex: 1,
    alignItems: 'center'
  },
  centerColumn: {
    flex: 4,
  },
  rightColumn: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed'
  }
})