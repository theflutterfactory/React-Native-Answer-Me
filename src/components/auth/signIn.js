import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

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
                    <TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },
    input: {
        width: 250,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        height: 50,
        width: 250,
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    button: {
        textAlign: 'center'
    },
    link: {
        marginTop: 10,
        color: 'blue'
    },
    links: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
