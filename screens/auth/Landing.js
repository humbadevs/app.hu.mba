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


export default class LandingScreen extends React.Component {


  render() {

    return (
      <View styles={styles.container}>
        <ScrollView styles={styles.container}
          contentContainerStyle={styles.contentContainer}>


          <View style={styles.welcome}>

            <Text style={styles.textHeader}>Hallo!</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this._Loginasync}>
              <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={this._Registerasync}>
              <Text style={styles.buttonText}> Register </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );

  }
  _Loginasync = async () => {

    this.props.navigation.navigate('SignIn');
  }
  _Registerasync = async () => {

    this.props.navigation.navigate('Register');
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcome: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 200,
    alignItems: 'center',



  },
  button: {
    borderRadius: 500,
    backgroundColor: 'black',
    width: 300,
    height: 40,
    alignItems: 'center',
    marginTop: 5
  },
  buttonText: {
    color: 'white'


  }

});
