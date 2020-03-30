import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Space from '../../components/Space';

export default class LandingScreen extends React.Component {
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
            <Space/>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={this._Registerasync}>
                <Text style={styles.buttonText}>Registrieren</Text>
              </TouchableOpacity>
              <Space/>
              <TouchableOpacity style={styles.button2} onPress={this._Loginasync}>
                <Text style={styles.buttonText}>Ich bin bereits Nutzer</Text>
              </TouchableOpacity>
              <Space/>
            </View>
            <Space/>
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
