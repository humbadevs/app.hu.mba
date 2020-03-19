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
       <SafeAreaView styles={styles.container}>
        <ScrollView styles={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this._signOutAsync}>
              <Text style={styles.buttonText}> Actually, sign me out :) </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this._resetmepls}>
              <Text style={styles.buttonText}> Passwort erneuern? </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={''}>
              <Text style={styles.buttonText}> Stundenplan ändern? </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={''}>
              <Text style={styles.buttonText}> außerplanmäßige Freistunde? </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={''}>
              <Text style={styles.buttonText}> Datenschutzerklärung </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={''}>
              <Text style={styles.buttonText}> ... </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    );
   }



   _signOutAsync = async () => {
     await AsyncStorage.removeItem('email');
     await AsyncStorage.removeItem('password');
     this.props.navigation.navigate('Auth');
   };

   _resetmepls = async () => { // to the ResetScreen!
     this.props.navigation.navigate('Reset');
   }



}

SettingsScreen.navigationOptions = {
  title: 'Einstellungen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'black'

  },
  contentContainer: {
    paddingTop: 30,
    backgroundColor: '#fff',
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
