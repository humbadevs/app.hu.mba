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

      <View>

          <TextInput
          style={styles.form}
          placeholder="E-mail"
          onChangeText={(email) => this.setState({email})}
          />

          <TextInput
          style={styles.form}
          placeholder="E-mail bestätigen"
          onChangeText={(emailConfirmation) => this.setState({emailConfirmation})}
          />

          <TextInput
           style={styles.form}
           placeholder="Firstname"
           onChangeText={(firstname) => this.setState({firstname})}
          />

          <TextInput
           style={styles.form}
           placeholder="Lastname"
           onChangeText={(lastname) => this.setState({lastname})}
          />

          <TextInput
           style={styles.form}
           placeholder="Password"
           secureTextEntry={true}
           onChangeText={(password) => this.setState({password})}
          />

          <TextInput
          style={styles.form}
          placeholder="Password bestätigen"
          secureTextEntry={true}
          onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
          />

          <Button
            title="Registrieren"
            color="#FA7268"
            onPress={this._Erfolgasync}
          />

      </View>
    );
  }

  _Erfolgasync =  async () => {
    if(this.state.email == this.state.emailConfirmation && this.state.password == this.state.passwordConfirmation && this.state.firstname !== '' && this.state.lastname !== ''){
      fetch('http://192.168.137.180:4563/register', {
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
