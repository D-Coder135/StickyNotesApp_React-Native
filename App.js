import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style = {styles.header}>
          <Text style = {{fontSize: 20}}>Sticky Notes</Text>
        </View>

        <View style = {styles.fotter}>
          <TextInput placeholder = "Note It Down Here." style = {styles.inputText}></TextInput>

          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: 'skyblue',
    height: 70,
    justifyContent: 'center',
    textAlign: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'grey'
  },

  fotter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopColor: 'skyblue',
    borderTopWidth: 2
  },
  
  inputText: {
    padding: 20,
    
  }
});
