import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from '../../styles';
import { firebaseApp } from './authentication';

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
    if (this.state.password === this.state.confirmPassword) {
      const { email, password } = this.state;
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ result: error.message });
      });
    } else {
      this.setState({ result: 'Password and confirmation password must match.' });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.feedback}>{this.state.result}</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(email) => this.setState({ email })} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          onChangeText={(password) => this.setState({ password })} />
        <TextInput
          placeholder="Confirm password"
          style={styles.input}
          secureTextEntry
          onChangeText={(confirmPassword) => this.setState({ confirmPassword })} />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.signUp()}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
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
