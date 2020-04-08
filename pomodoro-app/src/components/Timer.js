import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import CountDown from 'react-native-countdown-component';

export default function Timer({ navigation, quantTimerSeconds = 1500 }) {
  return(
    <View>
      <CountDown
        until={Number(quantTimerSeconds)}
        size={60}
        digitStyle={{backgroundColor: '#FF9F68'}}
        digitTxtStyle={{color: '#707070'}}
        separatorStyle={{color: '#FF9F68'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Minutes', s: 'Seconds'}}
        running={false}
      />
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    width: 'auto',
    alignContent: 'center',
    paddingTop: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#e6c073",
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '28%',
    height: 70,
  }, 
  buttonText: {
    fontWeight: 'bold', 
    fontSize: 25,
  }
})