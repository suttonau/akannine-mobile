import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
    <Text>Splash Screen</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})