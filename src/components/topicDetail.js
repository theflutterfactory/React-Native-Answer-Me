import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ListView
} from 'react-native';
import styles from '../styles';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

export default class TopicDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            dataSource: ds.cloneWithRows([])
        };
    }

    postComment() {

    }

    render() {
        return (
            <View style={styles.flexContainer}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigator.pop()}>
                        <Text style={styles.link}>Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Text style={styles.detailTitle}>{this.props.title}</Text>
                    <Text style={styles.detailSubtitle}>{this.props.author}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Add your thoughts'
                        onChangeText={(text) => this.setState({comment: text})}
                        onSubmitEditing={() => this.postComments()}>
                    </TextInput>
                    <ListView
                        style={styles.list}
                        enableEmptySections={true}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.renderRow(rowData)}/>
                </View>
            </View>
        );
    }
}
