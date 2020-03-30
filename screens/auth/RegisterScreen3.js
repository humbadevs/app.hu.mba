import * as React from 'react';
import { KeyboardAvoidingView, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Space from '../../components/Space';



export default class RegisterScreen3 extends React.Component {

  
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.contentContainer} behavior="padding">
          <Space/>
          <View styles={styles.message}>
            <Text style={styles.asdf}>Passwort</Text>
          </View>
          <Space/>
          <View style={styles.InputContainer}>

            <View style={styles.space}>
              <Space/>
              <View style={{ flex: 10 }}>
                <Text style={styles.text}>Jetzt nur noch ein sicheres Passwort setzten, welches du dir idealerweise auch merken kannst und schon geht es los mit einer viel spannenderen Pause.</Text>
                
                <TextInput style={styles.form}
                  placeholder="Passwort mit 8-16 Zeichen"
                  onChangeText={(email) => this.setState({ email })}
                />
                 <TextInput style={styles.form}
                  placeholder="Passwort wiederhohlen"
                  onChangeText={(email) => this.setState({ email })}
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
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register2')}>
                <Text style={styles.buttonText}>Habe es mir gemerkt!</Text>
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

