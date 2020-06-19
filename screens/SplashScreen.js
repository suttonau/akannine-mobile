import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
    <Text>Splash Screen</Text>
    </View>
  )
}

export default SplashScreen

const { height } = Dimensions.get("screen")
const logoHeight = height * 0.28

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: logoHeight,
    height: logoHeight
  },
  text: {
    color: 'grey',
    marginTop: 5
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  }
})