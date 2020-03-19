import * as React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  Linking
} from 'react-native';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import * as Font from 'expo-font';


export default class RegisterScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailConfirmation: '',
      firstname: '',
      lastname: '',
      password: '',
      passwordConfirmation: '',
    };
  }
  static navigationOptions = {
    title: 'Registrieren',
  }
  componentDidMount() {
    Font.loadAsync({
      'monserrat-bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
      'monserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
    });
  }
  static navigationOptions = {
    header: null,
  };

  /* tbd
  async componentDidMount(){

  }
  */



  render() {

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.contentContainer} behavior="padding">
          <View style={styles.space}></View>
          <View styles={styles.message}>
            <Text style={styles.asdf}>Registrieren</Text>
          </View>
          <View style={styles.space}></View>
          <View style={styles.InputContainer}>

            <View style={styles.space}>
              <View style={styles.space}></View>
              <View style={{ flex: 10 }}>
                <Text style={styles.text}>Da humba vorerst nur für Schüler des Humboldt Gymnasiums Berlin-Tegel verfügbar ist, benötigen wir nur deine Schulemail, an welche wir eine Bestätigungsmail schicken werden.</Text>
                
                <TextInput style={styles.form}
                  placeholder="vorname.nachname"
                  onChangeText={(email) => this.setState({ email })}
                />
                <Text style={styles.text2}>@humboldtschule-berlin.eu</Text>
              </View>

              <View style={styles.space}></View>
            </View>
            <View style={styles.space}></View>

           

          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.space}></View>
            <View style={styles.space}>
              <View style={styles.space}></View>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register2')}>
                <Text style={styles.buttonText}> Registrieren </Text>
              </TouchableOpacity>
              <View style={styles.space}></View>
            </View>
            <View style={{flex:1, flexDirection:'column'}}>
              <Text style={styles.text3}>Mit Absenden deiner Daten erklärst du dich einverstanden mit unseren <Text style={styles.text4} onPress={()=> Linking.openURL('https://www.notion.so/Privacy-b94679c757fb4ddba98be32908a8a412')}>Datenschutzrichtlinien</Text> und den <Text style={styles.text4} onPress={()=> Linking.openURL('https://www.google.com')}>Nutzungsbedinungen</Text> .</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

    );
  }

  _Erfolgasync = async () => {
    if (this.state.email == this.state.emailConfirmation && this.state.password == this.state.passwordConfirmation && this.state.firstname !== '' && this.state.lastname !== '') {
      fetch('http://192.168.2.60:4563/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          password: this.state.password,
        }),
      })
      this.props.navigation.navigate('Erfolg');
    }
  }
  /* tbd
  _signInAsync = async() => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };
  */

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',

  },
  space: {
    flex: 1,
    flexDirection: 'row',
   
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',

  },
  message: {
    flex: 1,
    flexDirection: 'column'
  },
  InputContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    flex: 5,
    backgroundColor: '#FA7268',
    justifyContent: 'center',
    alignItems: 'center',
    
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontFamily: 'monserrat-bold',
    fontSize: 17,
  },
  form: {
    borderRadius:10,
    borderBottomColor: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'monserrat-bold',
    fontSize: 10,
    backgroundColor:'white',
    padding:4,
    marginTop:5

  },
  asdf: {
    textAlign: "center",
    color: '#FFF',
    fontFamily: 'monserrat-bold',
    fontSize: 40
  },
  text: {
    fontFamily: 'monserrat-bold',
    color: 'white',
    fontSize:10,
    marginBottom: 10
  },

text2: {
    fontFamily: 'monserrat-bold',
    color: 'white',
    fontSize:10,
    textAlign:'center',
    marginTop:10
  },
  text3: {
    fontFamily: 'monserrat',
    color: 'white',
    fontSize:8,
    textAlign:'center',
    marginTop:10,
  },
  text4: {
    fontFamily: 'monserrat',
    color: 'white',
    fontSize:8,
    textAlign:'center',
    marginTop:10,
    textDecorationLine:'underline'
  },
});
