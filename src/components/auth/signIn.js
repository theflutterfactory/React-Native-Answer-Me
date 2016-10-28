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
                <Text>Sign In</Text>
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
    }
});
