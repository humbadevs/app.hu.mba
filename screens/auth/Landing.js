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
  TouchableOpacity,
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
      </SafeAreaView>
    );

  }
  _Loginasync = async () => {

    this.props.navigation.navigate('SignIn');
  }
  _Registerasync = async () => {

    this.props.navigation.navigate('Register');
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
