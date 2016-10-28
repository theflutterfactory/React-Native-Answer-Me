import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from '../../styles';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(text) => this.setState({email: text})}/>
                <TextInput
                    placeholder="password"
                    style={styles.input}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(text) => this.setState({password: text})}/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.button}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.links}>
                    <TouchableOpacity
                        onPress={() => this.props.navigator.push({name: 'signUp'})}>
                        <Text style={styles.link}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.link}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
