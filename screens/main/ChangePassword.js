import * as React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  Image,
  Text

} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';


export default class ChangePassword extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  static navigationOptions = {
    header: null,
  }
 
  render() {
    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView styles={styles.contentContainer}>

          <View style={styles.container}>
            <Image
              style={styles.tabbaricon}
              source={require('../main/2020-03-27 17_09_07-app.hu.mba – Figma.jpg')}
            />
          </View>

          <View style={styles.imagecontainer}>
          <TouchableOpacity style={styles.stretch} onPress={this._changeProfile}>
            <Image
              style={styles.stretch}
              source={require('../main/2020_03_27_17_10_17_Einstellungen.jpg')}
            />
          </TouchableOpacity>
          </View>

          <View style={styles.data}>

          <View style={styles.titelcontainer}>
            <Text style={styles.titel}>Passwort ändern</Text>
          </View>

          <View style={styles.textInputContainer}>
           
          </View>

          <View style={styles.buttonContainer}>

            <TouchableOpacity style={styles.button} onPress={this._fertig}>
              <Text style={styles.buttonText}>
                Passwort zurücksetzen
              </Text>
            </TouchableOpacity>
          </View>

          </View>
        </ScrollView>
      </SafeAreaView>

    ); // return
   
  }

  _fertig = async () => {
      // for resetting the password: Your code goes here!
      this.props.navigation.navigate('Main'); // Erfolg!
    
  }
}

const styles = StyleSheet.create({
  tabbaricon: {
    flex: 1,
    height: 32,
    width: 35,
  },
  data: {
    alignSelf: 'center',
    flex: 1,
    backgroundColor:'#262626',
    minWidth: 350,
    minHeight: 330,
  },
  imagecontainer: {
    alignItems: 'center',
    flex: 1,
    marginBottom: 50,
  },
  stretch: {
    marginTop: 15,
    height: 150,
    width: 135,
    flex: 1,
  },
  titelcontainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
  },
  contentContainer: {
    paddingTop: 30,
    backgroundColor: '#fff',
    alignContent: 'center',
  },
  titel: {
    marginTop: 20,
    color: '#FA7268',
    fontWeight: 'bold',
  },
  textInputContainer: {
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: 0,
    width: 200,
    height: 40,
    borderRadius: 0,
    borderWidth: 3,
    borderColor: '#262626',
    borderBottomColor: '#FA7268',
  },
    buttonContainer: {
    marginTop: 5,
    alignItems: 'center',
  },

  button: {
    borderRadius: 20,
    backgroundColor: '#FA7268',
    width: 300,
    height: 60,
    marginTop: 100,
    borderColor: '#262626',
    borderWidth: 3,
    alignItems: 'center', 
  },
  buttonText: {
    
    color: 'white',
    textAlignVertical: 'center',
    marginTop: 15,
    fontWeight: 'bold',
  
  }

});
