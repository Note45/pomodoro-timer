import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Timer from '../components/Timer'

export default function Main({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Total Focus</Text>
      <Timer quantTimerSeconds={1500} />
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F85959',
    alignContent: 'center',
    paddingTop: 70,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: '#584F4F',
    paddingBottom: 40 ,
  }
})