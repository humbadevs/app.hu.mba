import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  Alert,
  ScrollView

} from 'react-native';


export default class LandingScreen extends React.Component {


  render() {

    return (
<View styles={styles.container}>
      <ScrollView styles={styles.container}
       contentContainerStyle={styles.contentContainer}>


<View style={styles.welcome}>

        <Text style={styles.textHeader}>Hallo!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
              title="Login"
              style={styles.button}
              onPress={this._Loginasync}
            />
            <Button
                title="Registrieren"
                color="#FA7268"
                style={styles.button}
                onPress={this._Registerasync}
              />
</View>

      </ScrollView>
      </View>
    );

  }
  _Loginasync = async () => {

    this.props.navigation.navigate('SignIn');
  }
  _Registerasync = async () => {

    this.props.navigation.navigate('Register');
  }

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
  welcome: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    borderRadius: 10

  },
  button: {
    borderRadius: 500

  }

});
