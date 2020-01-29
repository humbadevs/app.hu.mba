import * as React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  Alert

} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';


export default class ResetScreen extends React.Component {

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

  /* tbd
  async componentDidMount(){

  }
  */



  render() {

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView styles={styles.contentContainer}>
          <View style={styles.textInputContainer}>

            <TextInput
              style={styles.form}
              placeholder="E-mail"
              onChangeText={(email) => this.setState({ email })}
            />

            <TextInput
              style={styles.form}
              placeholder="E-mail bestätigen"
              onChangeText={(emailConfirmation) => this.setState({ emailConfirmation })}
            />

            <TextInput
              style={styles.form}
              placeholder="Vorname"
              onChangeText={(firstname) => this.setState({ firstname })}
            />

            <TextInput
              style={styles.form}
              placeholder="Nachname"
              onChangeText={(lastname) => this.setState({ lastname })}
            />

            <TextInput
              style={styles.form}
              placeholder="Passwort"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
            />

            <TextInput
              style={styles.form}
              placeholder="Passwort bestätigen"
              secureTextEntry={true}
              onChangeText={(passwordConfirmation) => this.setState({ passwordConfirmation })}
            />
          </View>
          <View style={styles.buttonContainer}>
<TouchableOpacity style={styles.button}  onPress={this._ErfolgasyncLi}>
  <Text style={styles.buttonText}>
    Registrieren
  </Text>
</TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }

  _Erfolgasync = async () => {
    if (this.state.email == this.state.emailConfirmation && this.state.password == this.state.passwordConfirmation && this.state.firstname !== '' && this.state.lastname !== '') {
      fetch('http://10.254.1.72:4563/register', {
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
    //backgroundColor: 'black'

  },
  contentContainer: {
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  textInputContainer: {
    alignItems: 'center',
    marginTop: 30,
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
