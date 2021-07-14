import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Node extends React.Component {
    render () {
        return (
            <View style = {styles.node}>
                <Text style = {styles.noteText}></Text>
                <Text style = {styles.noteText}></Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    
});