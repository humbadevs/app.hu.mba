import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-navigation';


export default class LandingScreen extends React.Component {
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import * as Font from 'expo-font';



export default class LandingScreen extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'monserrat-bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    });
  }
  static navigationOptions = {
    header: null,
  };
  render() {

    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/images/background.png')} style={{width: '100%', height: '100%'}}>
          
        
        <View style={styles.contentContainer}>
          <View style={styles.welcome}></View>
          <View style={styles.space}>
            <View style={styles.space}></View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={this._Registerasync}>
                <Text style={styles.buttonText}>Registrieren</Text>
              </TouchableOpacity>
              <View style={styles.space}></View>
              <TouchableOpacity style={styles.button2} onPress={this._Loginasync}>
                <Text style={styles.buttonText}>Ich bin bereits Nutzer</Text>
              </TouchableOpacity>
              <View style={styles.space}></View>
            </View>
            <View style={styles.space}></View>
          </View>

        </View>
        </ImageBackground>
      </SafeAreaView>
    );

  }
  _Loginasync = async () => {

    this.props.navigation.navigate('SignIn');
  }
  _Registerasync = async () => {
    this.props.navigation.navigate('Pre');
  }

}






//Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',

    //backgroundColor: 'black'

  },
  space: {
    flex: 1,
    flexDirection: 'row'
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',

  },
  welcome: {
    flex: 5,
    flexDirection: 'column-reverse'
  },
  buttonContainer: {
    flex: 7,
    flexDirection: 'column',

  },
  button: {
    flex: 4,
    backgroundColor: '#FA7268',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth:3,
    justifyContent:'center'

  },
  button2: {
    flex: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    justifyContent:'center'

  },
  buttonText: {
    color: 'white',
    textAlign:'center',
    fontFamily: 'monserrat-bold',
    fontSize: 17,
  }

});
