import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  Alert,
  AsyncStorage,
} from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component{
  render() {
     return (
       <View>

         <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
       </View>
     
     );
   }



   _signOutAsync = async () => {
     await AsyncStorage.removeItem('email');
     await AsyncStorage.removeItem('password');
     this.props.navigation.navigate('Auth');
   };




}


 


SettingsScreen.navigationOptions = {
  title: 'app.json',
};
