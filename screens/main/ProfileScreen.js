import * as React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  Image,
  TextInput,
  Text
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';


export default class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'tomaato',
      email: '',
      emailConfirmation: '',
      firstname: '',
      lastname: '',
      password: '',
      passwordConfirmation: '',
    };
  }

  static navigationOptions = {
    //title: 'Profile', // title of the window
    header: null,
    /*title: 
    <Image
      //style={styles.tabbaricon}
      source={require('../main/2020-03-27 17_09_07-app.hu.mba – Figma.jpg')} // tada!
    />
    ,*/
  }
 
  render() {
    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView styles={styles.contentContainer}>

          <View style={styles.container}>
            <Image
              style={styles.tabbaricon}
              source={require('../main/2020-03-27 17_09_07-app.hu.mba – Figma.jpg')} // tada!
            />
          </View>

          <View style={styles.imagecontainer}>
          <TouchableOpacity style={styles.stretch} onPress={this._changeProfile}>
            <Image
              style={styles.stretch}
              source={require('../main/2020_03_27_17_10_17_Einstellungen.jpg')} // tada!
            />
          </TouchableOpacity>
          </View>

          <View style={styles.data}>

          <View style={styles.textInputtitelc}>
            <Text style={styles.titel}>Name</Text>
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.form}
              placeholder="Your Username" // actual Name!
              onChangeText={(name) => this.setState({ name })}
              editable = {false}
            />
          </View>

          <TouchableOpacity style={styles.editview} onPress={this._changeName}>
            <Image
              style={styles.edit}
              source={require('../main/2020-03-27 17_11_35-app.hu.mba – Figma.jpg')} // tada!
            />
          </TouchableOpacity>

          <View style={styles.textInputtitelc}>
            <Text style={styles.titel}>Email</Text>
          </View>

          <View style={styles.textInputContainer}>
    
            <TextInput
              style={styles.form}
              placeholder="can't@edit.this" // actual email!
              onChangeText={(email) => this.setState({ email })}
              editable = {false}
            />
          </View>

          <View style={styles.textInputtitelc}>
            <Text style={styles.titel}>Passwort</Text>
          </View>

          <TouchableOpacity style={styles.editview} onPress={this._changePassword}>
            <Image
              style={styles.edit}
              source={require('../main/2020-03-27 17_11_35-app.hu.mba – Figma.jpg')} // tada!
            />
          </TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>

    ); // return
   
  }
  

  /*some dead code:
          <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button} onPress={this._fertig}>
            <Text style={styles.buttonText}>
                fertig
            </Text>
          </TouchableOpacity>

          </View>
          
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.form}
              placeholder="Passwort"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
            />
          </View>*/

  _changeProfile = async () => {
    // your code for uploading pictures goes here
  }
  _changeName = async () => {
    this.props.navigation.navigate('CN'); // ChangeName.js!
  }
  _changePassword = async () => {
    this.props.navigation.navigate('CP'); // ChangePassword.js!
  }
  _fertig = async () => {
    if (this.state.email == this.state.emailConfirmation && this.state.password == this.state.passwordConfirmation)    { // looking if everything is filled

      // put your code here for REALLY changing the data of that person!
	  fetch('', { // 'http://192.168.137.180:4563/login' ? von wo soll ich fetchen?
        method: 'POST', // Art, warum POST? und nicht GET?
        headers: { // akzeptiere json
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ // Datenstrang -> json
          email: this.state.email, // Daten werden gesetzt
          password: this.state.password,
        }),
      })
        .then(res => res.json()) // dann die Antwort..?
      
      this.props.navigation.navigate('Main'); // Erfolg!
    }
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
    backgroundColor:'#262626', // #212121
    minWidth: 350,
    minHeight: 275,
  },
  edit: {
    //flex: 1,
    height: 39,
    width: 40,
    //left: 180,
    //marginTop: -30,
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
    //marginBottom: 30,
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
  },
  titel: {
    marginTop: 20,
    color: '#FA7268',
    fontWeight: 'bold',
  },
  textInputContainer: {
    alignItems: 'center',
    //justifyContent: 'space-between',
    marginTop: 0,
    marginBottom: 0,
    colour: 'white',
    //height: 50,
    width: 200,
    borderRadius: 0,
    borderWidth: 3,
    borderColor: '#262626',
    borderBottomColor: '#FA7268',
    left: 30,
  },
  textInputtitelc: {
    left: 30,
  },
  form: {
    //autoFocus: true,
    color: 'white',
    editable: false,
  },
  editview: {
    //flex: 1,
    //alignItems: 'center',
    left: 260,
    marginTop: -35,
  },
  button: {
    borderRadius: 500,
    backgroundColor: '#FA7268',
    width: 300,
    height: 40,
    marginTop: 0,
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
