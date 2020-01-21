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

  //componentDidMount updates states
  async componentDidMount(){

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
      if(this.state.email !== '' && this.state.password !== ''){

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

      if(this.state.email !== '' && this.state.password !== ''){

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
        .then( res => res.json() )
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
  setEmail = async() => {

    try {
      await AsyncStorage.setItem('email', this.state.email);
    } catch (error) {
      console.log(error);
    }
    
  };
  setPassword = async() => {

    try {
      await AsyncStorage.setItem('password', this.state.password);
    } catch (error) {
      console.log(error);
    }    
  };
  /* needs bugfixing
  setToken = async() => {

    try {
      await AsyncStorage.setItem('token', this.token);
    } catch (error) {
      console.log(error);
    }
  };
  */

  //Retrieving the locally saved items
  getRememberedEmail = async() => {

    try {
      const email = await AsyncStorage.getItem('email');
      if(email !== null){
        return email;
      }
    } catch (error) {
      console.log(error);
    }

  };

  getRememberedPassword = async() => {

    try {
      const password = await AsyncStorage.getItem('password');
      if(password !== null){
        return password;
      }
    } catch (error) {
      console.log(error);
    }

  };

  getRememberedToken = async() => {

    try {
      const token = await AsyncStorage.getItem('token');
      if(token !== null){
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
