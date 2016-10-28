import React, {Component} from 'react';
import {
    Navigator
} from 'react-native';

const routes = {

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

    }
}
