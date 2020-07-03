import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions, Platform, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'


const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Welcome!</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>Email</Text>
        <View style={styles.action}>
          <MaterialIcons name="person-outline" size={20} color='#008080' />
          <TextInput 
          placeholder='Your Email' 
          style={styles.textInput} 
          autoCapitalize='none'
          />
        </View>

        <Text style={styles.textFooter}>Password</Text>
        <View style={styles.action}>
        <Feather name="lock" size={20} color='#008080' />
          <TextInput 
          placeholder='Password' 
          style={styles.textInput} 
          autoCapitalize='none'
          secureTextEntry={true}
          />
        </View>

        <View style={styles.button}>
        <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.textSign}>Login!</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#008080'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  textHeader: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  textFooter: {
      color: '#008080',
      fontSize: 15,
      paddingVertical: 10
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: '#008080',
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'
  }
})