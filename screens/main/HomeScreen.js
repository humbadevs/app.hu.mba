//import * as WebBrowser from 'expo-web-browser';
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
  SafeAreaView,
  FlatList
} from 'react-native';


import { MonoText } from '../../components/StyledText';

export default class HomeScreen extends React.Component {
  render() {
    //Array in das die Daten rein sollen
    const list = [{ key:'Baum1', location:'Park1'},
    { key:'Baum2', location:'Park2' }];
    return (
      
          <View style={styles.container}>
            
            { list.length > 0 ? 
                <FlatList data={list}
                    renderItem={({item})=> (
                <View style={{borderBottomColor:'#999', padding:10}}>
            <Text style={{fontSize:60, fontWeight:'bold', color:'#333'}}>
                {item.key}
            </Text>
            <Text style={{fontSize:36, color:'#999'}}>
                {item.location}
            </Text>
        </View>
                    
            )} />
            
            :
                <Text style={{fontSize: 48, color:'red'}}>
                    Nichts zu sehen
                </Text>
            }
            </View>
      
    );
  }



  _signOutAsync = async () => {
    await AsyncStorage.removeItem('email');
    await AsyncStorage.removeItem('password');
    this.props.navigation.navigate('Auth');
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
