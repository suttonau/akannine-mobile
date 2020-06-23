import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode='contain'
          />
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>Stay connected with Everyone!</Text>
        <Text style={styles.text}>Sign Up or Login!</Text>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.textSign}>Get Started!</Text>
            <AntDesign name="right" size={15} color="#fff" />
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default SplashScreen

const { height } = Dimensions.get("screen")
const logoHeight = height * 0.55

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
  title: {
    color: '#05375a',
    fontSize: 25,
    fontWeight: 'bold',
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
    backgroundColor: '#008080',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5
  }
})