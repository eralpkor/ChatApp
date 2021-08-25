// rnfe
import React from 'react'
import { StyleSheet, TextInput } from 'react-native';
import { View, Text } from '../Themed';
import { SimpleLineIcons, Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 

const MessageInput = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
      <SimpleLineIcons name="emotsmile" size={24} color="#595959" style={styles.icon} />

        <TextInput 
          style={styles.input}
          placeholder="Message me!"
        />

        <Feather name="camera" size={24} color="#595959" />
        <Ionicons name="mic-outline" size={24} color="#595959" style={styles.icon} />
      </View>
      <View style={styles.buttonContainer}>
        <FontAwesome5 name="plus" size={24} color="white" style={styles.icon} />
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
    flexDirection: 'row',
    padding: 5,
  },
  input: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40, 
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
