import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import styles from '../styles';

export default class Topics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: ''
        };
    }

    signOut() {

    }

    render() {
        return (
            <View style={styles.topics}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.signOut()}>
                        <Text style={styles.link}>Sign Out</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>{this.state.displayName}</Text>
                </View>
                <View style={styles.body}></View>
            </View>
        );
    }
}
