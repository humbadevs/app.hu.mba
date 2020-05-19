import * as React from 'react';
import { KeyboardAvoidingView, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Space from '../../components/Space';



export default class RegisterScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.contentContainer} >
          <Space/>
          <View styles={styles.message}>
            <Text style={styles.asdf}>Registrieren</Text>
          </View>
          <Space/>
          <View style={styles.InputContainer}>

            <View style={styles.space}>
              <Space/>
              <View style={{ flex: 10 }}>
                <Text style={styles.text}>Da humba vorerst nur für Schüler des Humboldt Gymnasiums Berlin-Tegel verfügbar ist, benötigen wir nur deine Schul-E-Mail, an welche wir eine Bestätigungsmail schicken werden.</Text>
                
                <TextInput style={styles.form}
                  placeholder="vorname.nachname"
                  onChangeText={(email) => this.setState({ email })}
                />
                <Text style={styles.text2}>@humboldtschule-berlin.eu</Text>
                <TextInput style={styles.form}
                  placeholder="Passwort"
                  secureTextEntry={true}
                  onChangeText={(Passwort) => this.setState({ Passwort })}
                />
                <TextInput style={styles.form}
                  placeholder="Passwort"
                  secureTextEntry={true}
                  onChangeText={(Passwort2) => this.setState({ Passwort2 })}
                />
              </View>

              <Space/>
            </View>
            <Space/>
          </View>

          <View style={styles.buttonContainer}>
            <Space/>
            <View style={styles.space}>
              <Space/>
              <TouchableOpacity style={styles.button} onPress={this._register}>
                <Text style={styles.buttonText}> Registrieren </Text>
              </TouchableOpacity>
              <Space/>
            </View>
            <View style={{flex:1, flexDirection:'column'}}>
              <Text style={styles.text3}>Mit Absenden deiner Daten erklärst du dich einverstanden mit unseren <Text style={styles.text4} onPress={()=> Linking.openURL('https://www.notion.so/Privacy-b94679c757fb4ddba98be32908a8a412')}>Datenschutzrichtlinien</Text> und den <Text style={styles.text4} onPress={()=> Linking.openURL('https://www.google.com')}>Nutzungsbedinungen</Text> .</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>

    );
  }
_register = async() => {  
  this.props.navigation.navigate('AuthLoading')
}
 
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
    flex: 5,
    backgroundColor: '#FA7268',
    justifyContent: 'center',
    alignItems: 'center',
    
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontFamily: 'monserrat-bold',
    fontSize: 17,
  },
  form: {
    borderRadius:10,
    borderBottomColor: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'monserrat-bold',
    fontSize: 10,
    backgroundColor:'white',
    padding:4,
    marginTop:5

  },
  asdf: {
    textAlign: "center",
    color: '#FFF',
    fontFamily: 'monserrat-bold',
    fontSize: 40
  },
  text: {
    fontFamily: 'monserrat-bold',
    color: 'white',
    fontSize:10,
    marginBottom: 10
  },

text2: {
    fontFamily: 'monserrat-bold',
    color: 'white',
    fontSize:10,
    textAlign:'center',
    marginTop:10
  },
  text3: {
    fontFamily: 'monserrat',
    color: 'white',
    fontSize:8,
    textAlign:'center',
    marginTop:10,
  },
  text4: {
    fontFamily: 'monserrat',
    color: 'white',
    fontSize:8,
    textAlign:'center',
    marginTop:10,
    textDecorationLine:'underline'
  },
});
