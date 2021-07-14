import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Node extends React.Component {
    render () {
        return (
            <View style = {styles.node} key = {this.props.task}>
                <Text style = {styles.noteText}>{this.props.task.note}</Text>
                <Text style = {styles.noteText}>{this.props.task.date}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    node : {
        position: 'relative',
        padding: 20,
        paddingRight: 200,
        borderBottomColor: 'skyblue',
        borderBottomWidth: 3
    },

    noteText: {
        
    }
});