import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Node extends React.Component {
    render () {
        return (
            <View style = {styles.node} key = {this.props.task}>
                <Text style = {styles.noteText}>{this.props.task.note}</Text>
                <Text style = {{paddingLeft: 10, paddingTop: 10}}>{this.props.task.date}</Text>

                <TouchableOpacity style = {styles.deleteButton} onPress = {this.props.markDone}>
                    <Text>
                        Done
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    node : {
        position: 'relative',
        padding: 20,
        paddingRight: 220,
        borderBottomColor: 'skyblue',
        borderBottomWidth: 3
    },

    noteText: {
        paddingLeft: 20,
        borderLeftColor: 'skyblue',
        borderLeftWidth: 10,
    },
    deleteButton : {
        position: 'absolute',
        right: 10,
        bottom:10,
        top:10,
        padding: 10,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
});