import React, {Component} from 'react';
import {
    Navigator
} from 'react-native';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';

const routes = {
    signIn: SignIn,
    signUp: SignUp
};

export default class Main extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: 'signIn'}}
                renderScene={this.renderScene}/>
        );
    }

    renderScene(route, navigator) {
        let Component = routes[route.name];
        return (
            <Component
                navigator={navigator}/>
        );
    }
}
