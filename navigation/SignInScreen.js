import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
} from 'react-native';


export default class SignInScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
    };
  }

  static navigationOptions = {
    title: 'Sign In',
  };

  render() {

    return (

      <View>

        <Text style={styles.textHeader}>Welcome to Humba!</Text>

        <Text style={styles.textBody}>Login with Iserv:</Text>

        <TextInput style={styles.form}
          placeholder="E-mail"
          onChangeText={(email) => this.setState({email})}
        />

        <TextInput style={styles.form}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
        />

        <Button 
          title="Sign in!" 
          onPress={this._signInAsync}
        />

        <Button
          title="Registrieren"
          onPress={this._Registerasync}
        />

      </View>
    );
  }

  _Registerasync = async () => {
    this.props.navigation.navigate('Register')
  };

  _signInAsync = async() => {

    //tbd await AsyncStorage.setItem('userToken', 'abc');

    if(this.state.email !== '' && this.state.password!== ''){

      fetch('http://yourIPv4:port/login', {
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
      .then((response) => {
        if(response.ok){
          console.log(this.state.email);
          this.props.navigation.navigate('Main');
        }       
      })
    }
  };
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
