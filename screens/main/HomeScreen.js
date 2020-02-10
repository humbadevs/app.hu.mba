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
  FlatList,
} from 'react-native';
import * as Font from 'expo-font';



import { MonoText } from '../../components/StyledText';
import { render } from 'react-dom';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    Font.loadAsync({
      'monserrat-bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    });
  }
  render() {
    //Array in das die Daten rein sollen
    //Die pic Links können api Links sein
    const list = [
    { key: 'Baum1', time: 'Noch 20 min', activity: 'Essen gehen', pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Birnbaum_am_Lerchenberg_retouched.jpg/310px-Birnbaum_am_Lerchenberg_retouched.jpg' },
    { key: 'Baum2', time: 'Noch 180 min', activity: 'Essen gehen', pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ceiba_sp_branches.jpg/100px-Ceiba_sp_branches.jpg' },
    { key: 'Baum3', time: 'Noch 150 min', pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ceiba_sp_branches.jpg/100px-Ceiba_sp_branches.jpg' },
    ];
    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={{ width: 31, height: 31, }}
            source={require('../../assets/images/icon_transparent_bg_humba.png')}
          />
        </View>

        {list.length > 0 ?
          <FlatList data={list}
            renderItem={({ item }) => (
              <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.text1}>
                    {item.key}
                  </Text>
                  <Text style={styles.text2}>
                    {item.time}
                  </Text>
                  {item.activity != null &&
                    <Text style={styles.text1}>
                      {item.activity}
                    </Text>
                  }
                </View>
                <View style={styles.ImageContainer}>
                  <View style={styles.Imageborder}>
                    <Image style={styles.Image}
                      source={{ uri: item.pic }}
                    />
                  </View>
                </View>
              </View>

            )} />

          :
          <Text style={{ fontSize: 48, color: 'red' }}>
            Nichts zu sehen
                </Text>
        }

      </View>

    );
  }
}






//Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    height: 140,
  },
  textContainer: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#252525',
    marginRight: 50,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center'
  },
  text1: {
    fontSize: 17,
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'monserrat-bold'
  },
  text2: {
    fontSize: 17,
    color: '#FA7268',
    textAlign: 'center',
    fontFamily: 'monserrat-bold'
  },
  ImageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  Imageborder: {
    right: 85,
    width: 80,
    height: 80,
    borderColor: '#151515',
    borderWidth: 10,
    borderRadius: 45,
  },
  Image: {
    width: 60,
    height: 60,

    borderRadius: 30,
  },
  header: {

    marginTop: 50,
    marginBottom: 10,
    alignItems: 'center',

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
