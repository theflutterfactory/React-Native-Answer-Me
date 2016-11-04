import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import Topics from './components/topics';
import ChooseName from './components/auth/chooseName';
import TopicDetail from './components/topicDetail';
import ForgotPassword from './components/auth/forgotPassword';

const routes = {
    SignIn,
    SignUp,
    Topics,
    ChooseName,
    ForgotPassword,
    TopicDetail
};

export default class Main extends Component {
    renderScene(route, navigator) {
        const Component = routes[route.name];
        const { displayName, title, author, row_uid } = route;
        return (
            <Component
                navigator={navigator}
                displayName={displayName}
                title={title}
                author={author}
                row_uid={row_uid} />
        );
    }

    render() {
        return (
            <Navigator
                initialRoute={{ name: 'SignIn' }}
                renderScene={this.renderScene} />
        );
    }
}
