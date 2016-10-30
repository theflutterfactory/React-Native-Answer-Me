import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from '../../styles';
import {firebaseApp} from './authentication';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            result: ''
        };
    }

    signUp() {
        if(this.state.password == this.state.confirmPassword) {
            let{email, password} = this.state;
            firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({result: error.message});
            });

        } else {
            this.setState({result: 'Password and confirmation password must match.'});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.feedback}>{this.state.result}</Text>
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text) => this.setState({email: text})}/>
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({password: text})}/>
                    <TextInput
                        placeholder="Confirm password"
                        style={styles.input}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({confirmPassword: text})}/>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={() =>  this.signUp()}>
                        <Text style={styles.button}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.links}>
                    <TouchableOpacity
                        onPress={() => this.props.navigator.pop()}>
                        <Text style={styles.link}>Already a member? Sign In</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
