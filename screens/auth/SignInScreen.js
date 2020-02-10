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
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class SignInScreen extends React.Component {

  //componentDidMount updates states
  async componentDidMount() {

    //Loading in the data
    const email = await this.getRememberedEmail();
    const password = await this.getRememberedPassword();

    this.setState({
      email: email || '',
      password: password || '',
    });

    try {
      if (this.state.email !== '' && this.state.password !== '') {

        //Posting the login to the API
        fetch('http://192.168.2.60:4563/login', {
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


  static navigationOptions = {
    title: 'Sign In',
  };


  render() {

    return (

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <View styles={styles.welcome}>
            <Text style={styles.asdf}>Welcome to Humba!</Text>
            <Text style={styles.asdf}>Login with Iserv:</Text>
          </View>
          <View style={styles.InputContainer}>
            <TextInput style={styles.form}
              placeholder="E-mail"
              onChangeText={(email) => this.setState({ email })}
            />

            <TextInput style={styles.form}
              placeholder="Password"
              onChangeText={(password) => this.setState({ password })}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this._signInAsync}>
              <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </SafeAreaView>
    );
  }



  _signInAsync = async () => {

    if (this.state.email !== '' && this.state.password !== '') {

      //Posting the login to the API
      fetch('http://192.168.2.60:4563/login', {
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
          console.log(token);
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

  setToken = async() => {

    try {
      await AsyncStorage.setItem('token', this.token);
    } catch (error) {
      console.log(error);
    }
  };


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

}



//Stylesheet

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
  InputContainer: {
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


  },
  asdf: {
    textAlign: "center",

  }

});
