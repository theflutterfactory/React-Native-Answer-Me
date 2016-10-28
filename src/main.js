import React, {Component} from 'react';
import {
    Navigator
} from 'react-native';
import SignIn from './components/auth/signIn';

const routes = {
    signIn: SignIn
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
