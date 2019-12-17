import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/icon.png')} />
      <Text style={styles.textHeader}>Welcome to humba!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 30
  },
  textHeader: {
    textAlign: 'center',
    color: '#FA7268',
    fontWeight: '700',
    fontSize: 50
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 40
  }
});
