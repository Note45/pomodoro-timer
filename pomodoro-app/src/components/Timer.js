import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import CountDown from 'react-native-countdown-component';

export default function Timer({ navigation, quantTimerSeconds, page}) {
  const [started, setStarted] = useState(false)
  const [idTimer, setIdTimer] = useState(1)

  return(
    <View>
      <CountDown
        id={idTimer.toString()}
        className='counter'
        until={Number(quantTimerSeconds)}
        size={60}
        onFinish={() => navigation.navigate(page)}
        digitStyle={{backgroundColor: '#FF9F68'}}
        digitTxtStyle={{color: '#707070'}}
        separatorStyle={{color: '#FF9F68'}}
        showSeparator={true}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Minutes', s: 'Seconds'}}
        running={started}
      />
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => setStarted(true)}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => setIdTimer(idTimer + 1)}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => setStarted(false)}>
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