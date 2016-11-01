import React, {Component} from 'react';
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
    signIn: SignIn,
    signUp: SignUp,
    topics: Topics,
    chooseName: ChooseName,
    forgotPassword: ForgotPassword,
    topicDetail: TopicDetail
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
        let {displayName, title, author, row_uid} = route;
        return (
            <Component
                navigator={navigator}
                displayName={displayName}
                title={title}
                author={author}
                row_uid={row_uid}/>
        );
    }
}
