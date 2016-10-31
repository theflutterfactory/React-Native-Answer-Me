import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import {firebaseApp} from './authentication';
import styles from '../../styles';

export default class ChooseName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    updateDisplayName() {
        let user = firebaseApp.auth().currentUser;
        user.updateProfile({
            displayName: this.state.name
        }).then(() => {
            this.props.navigator.push({
                name: 'topics'
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Choose a display Name</Text>
                <TextInput
                    placeholder="Name"
                    style={styles.input}
                    onChangeText={(text) => this.setState({name: text})}/>
                <TouchableOpacity style={styles.buttonContainer}
                    onPress={() => this.updateDisplayName()}>
                    <Text style={styles.button}>Confirm</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
