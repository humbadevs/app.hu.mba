//import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Alert, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
          <FlatList inverted={false} data={list}
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
                  <View style={styles.Imageborder} >
                    <TouchableOpacity onPress={() => {
                      this.setModalVisible(true);
                    }}>
                    <Image style={styles.Image}
                      source={{ uri: item.pic }}
                    />
                    </TouchableOpacity>
                  </View>
                </View>

              </View>

            )} />

          :
          <Text style={{ fontSize: 48, color: 'red' }}>
            Nichts zu sehen
                </Text>
        }

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <TouchableOpacity style={styles.space} onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}></TouchableOpacity>
          <View style={styles.space} >
            <TouchableOpacity style={styles.space} onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}></TouchableOpacity>
            <View style={styles.kontaktContainer}>
              <View style={styles.kontaktTextContainer}>
          <Text style={styles.text1}></Text>
                <Text style={styles.text2}>test</Text>
      </View>
              <TouchableOpacity style={styles.Button}>
                <Text style={styles.text1}>Kontakt anfragen</Text>
              </TouchableOpacity>
              <View style={styles.ImageContainer2}>
                <View style={styles.Imageborder2} >

                  <Image style={styles.Image2}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ceiba_sp_branches.jpg/100px-Ceiba_sp_branches.jpg' }}
                  />
                </View>
              </View>

            </View>
            <TouchableOpacity style={styles.space} onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}></TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.space} onPress={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}></TouchableOpacity>
        </Modal>
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
    borderRadius: 10,
    marginRight: 5,
    marginLeft: 5,
    flex: 1,
    justifyContent: 'center'
  }
});
