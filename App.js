import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Laptoplist from './compo/Laptoplist';
import Header from './compo/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    <Laptoplist />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
         backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'center',
  },
 
});
