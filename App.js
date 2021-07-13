import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style = {styles.header}>
          <Text style = {{fontSize: 20}}>Sticky Notes</Text>
        </View>

        <View></View>
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
  }
});
