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


export default class ResetScreen2 extends React.Component {

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
    title: 'Reset', // title of the window
  }

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

<TouchableOpacity style={styles.button} onPress={this._fertig}>
  <Text style={styles.buttonText}>
    fertig
  </Text>
</TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>

    );
  }

  _fertig = async () => {
    if (this.state.email == this.state.emailConfirmation && this.state.password == this.state.passwordConfirmation)    { // looking if everything is filled

      // put here your code for REALLY changing the data of that person!
      
      this.props.navigation.navigate('Main'); // Erfolg!
    }
  }
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
