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
  Linking,
  Image

} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import * as Font from 'expo-font';
import Space from '../../components/Space';



export default class RegisterScreen2 extends React.Component {

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
    header: null,
  };

  render() {

    return (
      <SafeAreaView style={styles.container}>
        
        <KeyboardAvoidingView style={styles.contentContainer} behavior="padding">
          <Space/>
          <View style={{flex:1, alignItems:'center'}}>
            <Space/>
            <Image source={require('../../assets/images/Letter.png')} style={styles.image}></Image>
          </View>
         
          
          <View style={styles.InputContainer}>

            <View style={styles.space}>
              <Space/>
              <View style={{ flex: 10 }}>
                <Text style={styles.asdf}>Woah, so einfach.</Text>
                <Space/>
                <Text style={styles.text}>Jetzt nur noch den <Text style={styles.text2}>Code</Text> aus deiner Bestätigungsmail <Text style={styles.text2}>unten eingeben</Text> und schon bist du schon dabei.</Text>
                <Space/>
                <Text style={styles.text3}>Auch nach 5 Minuten keine Email an vorname.nachname@humboldtschule-berlin.eu bekommen? <Text style={styles.text4} onPress={this._resendAsync}>Dann klicke hier</Text>. Falls dies auch nicht geholfen hat schreibe uns bitte an: <Text style={styles.text4} onPress={() => Linking.openURL('mailto:support@hu.mba')}>support@hu.mba</Text>.</Text>
              </View>

              <Space/>
            </View>

          </View>

          <View style={styles.buttonContainer}>
            <Space/>
            <View style={styles.space}>
              <Space/>
              <TextInput style={styles.form}
                placeholder="XXXXXX"
                onChangeText={(email) => this.setState({email})} //benötigt fixing
              />
              <Space/>
            </View>



            <View style={styles.space}>
              <Space/>

              <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Register3')}>
                <Text style={styles.buttonText}> Bestätigen </Text>
              </TouchableOpacity>
              <Space/>
            </View>
            <Space/>
          </View>
        </KeyboardAvoidingView>

      </SafeAreaView>

    );
  }
  _resendAsync = async () => {
    //Zu implementieren

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
    flexDirection: 'column',
    backgroundColor:'red'
  },
  InputContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
  buttonContainer: {
    flex: 1.5,
  },
  button: {
    flex: 5,
    backgroundColor: '#FA7268',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontFamily: 'monserrat-bold',
    fontSize: 17,
  },
  form: {
    borderRadius: 10,
    borderBottomColor: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'monserrat-bold',
    fontSize: 20,
    backgroundColor: 'white',
    padding: 4,
    marginTop: 5,
    flex: 5,
    textAlign: 'center',
    marginBottom: 10

  },
  asdf: {
    textAlign: "center",
    color: '#FA7268',
    fontFamily: 'monserrat-bold',
    fontSize: 30
  },
  text: {
    fontFamily: 'monserrat-bold',
    color: 'rgba(250, 114, 104, 0.5);',
    fontSize: 15,
    marginBottom: 10,
    textAlign: 'center'
  },

  text2: {
    color: '#FA7268'
  },
  text3: {
    fontFamily: 'monserrat-bold',
    color: 'rgba(250, 114, 104, 0.5);',
    fontSize: 8,
    textAlign: 'center',

  },
  text4: {

    textDecorationLine: 'underline'
  },
  image: {
    flex: 10,
    resizeMode: 'contain',
    height: 100,
    width: 100
},
});

