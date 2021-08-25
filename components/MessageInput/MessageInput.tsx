// rnfe
import React from 'react'
import { StyleSheet, TextInput } from 'react-native';
import { View, Text } from '../Themed';

const MessageInput = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput />
      </View>
      <View style={styles.buttonContainer}>
        <Text styles={styles.buttonText}>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
  },
  inputContainer: {
    backgroundColor: '#dedede',
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 50,
    height: 50, 
    backgroundColor: '#3872E9',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 35,
  }
})

export default MessageInput
