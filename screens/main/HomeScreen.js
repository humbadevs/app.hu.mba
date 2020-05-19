//import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Alert, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View, RefreshControl, ActivityIndicator, AsyncStorage } from 'react-native';
import Space from '../../components/Space';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    //True to show the loader
    this.state = { refreshing: true, modalVisible: false, selected: 0, dataSource: [] };
    //Running the getData Service for the first time
    this.GetData();
  }
  static navigationOptions = {
    header: null,
  };
  onSelect = (_id) => {
    this.setState({ selected: _id })
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  };
  GetData = () => {

    console.log("Bis hier!");
    //Hier unsere API einfügen, ist nur platzhalter
    return fetch('https://api.hu.mba/user/available')

      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          refreshing: false,
          //Setting the data source for the list to render
          dataSource: responseJson,

        });
        console.log("Bis hier 4.0");
      })
      .catch(error => {
        console.error(error);
      });
  };
  onRefresh() {
    //Clear old data of the list
    this.setState({ dataSource: [], refreshing: true });
    //Call the Service to get the latest data
    this.GetData();
  };
  render() {


    if (this.state.refreshing) {
      return (
        //loading view while data is loading
        <View style={{ backgroundColor: '#151515', flex: 1 }}>
          <View style={styles.header}>
            <Image
              style={{ width: 31, height: 31, }}
              source={require('../../assets/images/icon_transparent_bg_humba.png')}
            />
          </View>
          <View style={{ flex: 1, paddingTop: 20, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#FA7268" />
          </View>
        </View>
      );
    } else {
      if (this.state.dataSource.length == 0 && !this.state.refreshing) {
        return (
          <View style={styles.container}>
            <View style={styles.header}>

              <Image
                style={{ width: 31, height: 31, }}
                source={require('../../assets/images/icon_transparent_bg_humba.png')}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Image
                style={{ flex: 1, resizeMode: 'contain' }}
                source={require('../../assets/images/giphy1.png')}
              />
              <Text style={styles.text1}>
                asdf
          </Text>
              <TouchableOpacity style={styles.Button} onPress={this.onRefresh.bind(this)}>
                <Text>Refrsh</Text>
              </TouchableOpacity>
            </View>
          </View>
        );

      } else {
        return (
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                style={{ width: 31, height: 31, }}
                source={require('../../assets/images/icon_transparent_bg_humba.png')}
              />
            </View>
            <FlatList inverted={false}

              data={this.state.dataSource}

              keyExtractor={(item) => item._id}

              extraData={this.state.selected}

              refreshControl={
                <RefreshControl
                  colors={['#151515']}
                  refreshing={this.props.refreshing}
                  onRefresh={this.onRefresh.bind(this)}
                  progressBackgroundColor={'#FA7268'}
                />
              }
              renderItem={({ item }) => (
                <Teil name={item.firstname + " " + item.lastname}
                  url={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgfoidma.at%2Fsites%2Fdefault%2Ffiles%2Ftextimage%2F1%2Fich-bin-eigentlich-nie-fett-aber-heute-bin-ich-ziemlich-fett.png&f=1&nofb=1"}
                  activity={null}
                  time={'hat gerade Freistunde!'}
                  selected={this.state.selected == item._id ? true : false}
                  onSelect={this.onSelect}
                />
              )
              } />
          </View>
        );

      }
    }
  }
}

function Teil({ name, time, activity, url, selected, onSelect }) {

  return (
    <View style={styles.contentContainer}>
      {selected ?
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => onSelect(0)} style={styles.space} />
          <View style={styles.space}>
            <TouchableOpacity onPress={() => onSelect(0)} style={styles.space} />
            <TouchableOpacity //onPress={}
              style={styles.Button}>
              <Text style={styles.text1}>
                Anfragen
      </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onSelect(0)} style={styles.space} />
          </View>
          <TouchableOpacity onPress={() => onSelect(0)} style={styles.space} />
        </View>
        :
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={() => onSelect(time)}>
            <Text style={styles.text1}>
              {name}
            </Text>
            <Text style={styles.text2}>
              {time}
            </Text>
           
            <Text style={styles.text1}>
              {activity}
            </Text>
              
          </TouchableOpacity>
        </View>
      }
      <View style={styles.ImageContainer}>
        <View style={styles.Imageborder} >
          <Image style={styles.Image}
            source={{ uri: url }}
          />
        </View>
      </View>

    </View>

  );

}
//Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  space: {
    flex: 1,
    flexDirection: 'row',
  },
  kontaktContainer: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#252525',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    borderColor: '#FA7268',
    borderWidth: 2,
    borderRadius: 15,

  },
  kontaktTextContainer: {
    flex: 2.5,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
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
  ImageContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  Imageborder2: {
    flexDirection: 'column',
    right: 0,
    width: 75,
    height: 75,
    borderRadius: 45,
    backgroundColor: '#FA7268',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    top: 37.5,
  },
  Imageborder: {
    right: 85,
    width: 80,
    height: 80,
    borderColor: '#151515',
    borderWidth: 10,
    borderRadius: 45,
    backgroundColor: '#151515'
  },
  Image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  Image2: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  header: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',

  },
  Button: {
    backgroundColor: '#FA7268',
    borderRadius: 8,
    marginRight: 5,
    marginLeft: 5,
    flex: 1.5,
    justifyContent: 'center'
  }
});
