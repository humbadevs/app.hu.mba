import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  Alert,
  AsyncStorage,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class SettingsScreen extends React.Component{

  render() {
     return (
       <View styles={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this._signOutAsync}>
              <Text style={styles.buttonText}> Actually, sign me out :) </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this._setUnterricht}>
              <Text style={styles.buttonText}> keine Freistunde? </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this._setPause}>
              <Text style={styles.buttonText}> außerplanmäßige Freistunde? </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=> Linking.openURL('https://www.notion.so/Privacy-b94679c757fb4ddba98be32908a8a412')}>
              <Text style={styles.buttonText}> Datenschutzerklärung </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
   }
   _setUnterricht = async() =>{

    fetch('https://api.hu.mba/user', {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: await AsyncStorage.getItem('id'),
        currentBreak: false,
      }) 
    })

    console.log("Freistunde yay");

   }

   _setPause = async () => {

      fetch('https://api.hu.mba/user', {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: await AsyncStorage.getItem('id'),
          currentBreak: true,
        }) 
      })

      console.log("Freistunde yay");
      
    };

   _signOutAsync = async () => {
    const userToken = await AsyncStorage.getItem('token');
    console.log(userToken);
     await AsyncStorage.removeItem('token');

     this.props.navigation.navigate('AuthLoading');
   };




}

SettingsScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515'
  },
  contentContainer: {
    paddingTop: 30,
    backgroundColor: '#151515'
  },
  welcome: {
    alignItems: 'center',
    marginTop: 250,
    marginBottom: 20,
  },
  buttonContainer: {
    //marginTop: 200,
    alignItems: 'center',
  },
  button: {
    borderRadius: 500,
    backgroundColor: '#FA7268',
    width: 300,
    height: 40,
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 3,
    alignItems: 'center',
    
    
    
  },
  buttonText: {
    
    color: 'white',
    textAlignVertical: 'center',
    marginTop: 5
  
  }

});
