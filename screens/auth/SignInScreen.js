import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Space from '../../components/Space';


export default class SignInScreen extends React.Component {
  
  static navigationOptions = {
    header: null,
  };
  //componentDidMount updates states
  async componentDidMount() {

    //Loading in the data
    const email = await this.getRememberedEmail();
    const password = await this.getRememberedPassword();
    const token = await this.getRememberedToken();
    this.setState({
      email: email || '',
      password: password || '',
      token: token || ''
    });

    try {
      if (this.state.email !== '' && this.state.password !== '') {

        //Posting the login to the API
        fetch('http://192.168.137.180:4563/login', {
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
        //Navigating to main-page
        this.props.navigation.navigate('Main');

      }
    } catch (error) {
      console.log(error);
    }


  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: '',
    };
  }


  render() {

    return (

      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.contentContainer} behavior="padding">
          <Space/>
          <View styles={styles.message}>
            <Text style={styles.asdf}>Login</Text>
          </View>
          <Space/>
          <View style={styles.InputContainer}>

            <View style={styles.space}>
              <Space/>
              <View style={{ flex: 10 }}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.form}
                  placeholder="vorname.nachname@humboldtschule-berlin.eu"
                  onChangeText={(email) => this.setState({ email })}
                />
              </View>

              <Space/>
            </View>
            <Space/>

            <View style={styles.space}>
              <Space/>
              <View style={{ flex: 10 }}>
                <Text style={styles.text}>Passwort</Text>
                <TextInput style={styles.form}
                  placeholder="8 - 16 Zeichen"
                  onChangeText={(password) => this.setState({ password })}
                  secureTextEntry={true}
                /></View>

              <Space/>
            </View>

          </View>

          <View style={styles.buttonContainer}>
            <Space/>
            <View style={styles.space}>
              <Space/>
              <TouchableOpacity style={styles.button} onPress={this._signInAsync}>
                <Text style={styles.buttonText}> Login </Text>
              </TouchableOpacity>
              <Space/>
            </View>
            <Space/>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }



  _signInAsync = async () => {

    if (this.state.email !== '' && this.state.password !== '') {

      //Posting the login to the API
      fetch('http://192.168.137.180:4563/login', {
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
        .then((data) => {

          //Navigating to main-page
          this.props.navigation.navigate('Main');

          let token = data.token;
          this.setEmail();
          this.setPassword();
          return token;
          /* needs bugfixing
          this.setToken();
          return token;
          */
          //debug console.log(token);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  };

  //Setting Up the Items
  setEmail = async () => {

    try {
      await AsyncStorage.setItem('email', this.state.email);
    } catch (error) {
      console.log(error);
    }

  };
  setPassword = async () => {

    try {
      await AsyncStorage.setItem('password', this.state.password);
    } catch (error) {
      console.log(error);
    }
  };

  /* needs bugfixing

  setToken = async () => {

    try {
      await AsyncStorage.setItem('token', this.token);
    } catch (error) {
      console.log(error);
    }
  };
  */

  //Retrieving the locally saved items
  getRememberedEmail = async () => {

    try {
      const email = await AsyncStorage.getItem('email');
      if (email !== null) {
        return email;
      }
    } catch (error) {
      console.log(error);
    }

  };

  getRememberedPassword = async () => {

    try {
      const password = await AsyncStorage.getItem('password');
      if (password !== null) {
        return password;
      }
    } catch (error) {
      console.log(error);
    }

  };


  getRememberedToken = async () => {

    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        return token;
      }
    } catch (error) {
      console.log(error);
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
    color:'white',
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
