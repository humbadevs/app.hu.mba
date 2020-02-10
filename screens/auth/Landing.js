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

  static navigationOptions = {
    header: null,
  };
  render() {

    return (
      <SafeAreaView styles={styles.container}>
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
    marginTop: 200,
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
