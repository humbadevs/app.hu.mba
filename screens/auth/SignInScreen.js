import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, AsyncStorage } from 'react-native';
import Space from '../../components/Space';


export default class SignInScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {

    return (

      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.contentContainer} >
          <Space />
          <View styles={styles.message}>
            <Text style={styles.asdf}>Login</Text>
          </View>
          <Space />
          <View style={styles.InputContainer}>

            <View style={styles.space}>
              <Space />
              <View style={{ flex: 10 }}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.form}
                  placeholder="vorname.nachname@humboldtschule-berlin.eu"
                  onChangeText={(email) => this.setState({ email })}
                />
              </View>

              <Space />
            </View>
            <Space />

            <View style={styles.space}>
              <Space />
              <View style={{ flex: 10 }}>
                <Text style={styles.text}>Passwort</Text>
                <TextInput style={styles.form}
                  placeholder="8 - 16 Zeichen"
                  onChangeText={(password) => this.setState({ password })}
                  secureTextEntry={true}
                /></View>

              <Space />
            </View>

          </View>

          <View style={styles.buttonContainer}>
            <Space />
            <View style={styles.space}>
              <Space />
              <TouchableOpacity style={styles.button} onPress={this._signInAsync}>
                <Text style={styles.buttonText}> Login </Text>
              </TouchableOpacity>
              <Space />
            </View>
            <Space />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }



  _signInAsync = async () => {

    if (this.state.email !== '' && this.state.password !== '') {

      //Posting the login to the API
      console.log("Vor Fetch!");
      const response = await fetch('https://api.hu.mba/user/auth', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then(res => res.json())
        .then(async (data) => {
          console.log("Bis hier!");

          console.log(data.token);
          console.log(data._id);

          await AsyncStorage.setItem('token', data.token);
          await AsyncStorage.setItem('id', data._id);

          console.log("Bis hier2!");
          
          //Navigating to main-page
          this.props.navigation.navigate('AuthLoading');
        })
        .catch ((error) => {
        console.log(error);
      })
    }
  };
}

//Stylesheet

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
    backgroundColor: '#FA7268',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontFamily: 'monserrat-bold',
    fontSize: 17,
  },
  form: {
    borderColor: '#151515',
    borderBottomColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 2,
    color: 'white',
    fontFamily: 'monserrat-bold',
    fontSize: 10,

  },
  asdf: {
    textAlign: "center",
    color: '#FFF',
    fontFamily: 'monserrat-bold',
    fontSize: 40
  },
  text: {
    fontFamily: 'monserrat-bold',
    color: 'white'
  },
});
