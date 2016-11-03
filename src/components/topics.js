import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ListView
} from 'react-native';
import styles from '../styles';
import { firebaseApp, topicsRef } from './auth/authentication';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      title: '',
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    const user = firebaseApp.auth().currentUser;
    if (user != null) {
      if (!user.displayName) {
        this.props.navigator.push({
          name: 'chooseName'
        });
      } else {
        this.setState({
          displayName: user.displayName
        });

        this.listenForItems(topicsRef);
      }
    }
  }

  listenForItems(ref) {
    ref.on('value', (snapshot) => {
      const topics = [];
      snapshot.forEach(topic => {
        topics.push({
          title: topic.val().title,
          author: topic.val().author,
          key: topic.key
        });
      });
      this.setState({ dataSource: ds.cloneWithRows(topics) });
    });
  }

  signOut() {
    firebaseApp.auth().signOut()
    .then(() => {
      this.props.navigator.popToTop();
    }, (error) => {
      console.log(error);
    });
  }

  details(data) {
    this.props.navigator.push({
      name: 'topicDetail',
      displayName: this.state.displayName,
      title: data.title,
      author: data.author,
      row_uid: data.key
    });
  }

  addTopic() {
    topicsRef.push({
      title: this.state.title,
      author: this.state.displayName
    });
  }

  renderSeparator(sectionID, rowID) {
    return (
      <View
        style={styles.separator}
        key={sectionID + rowID} />
    );
  }

  renderRow(rowData) {
    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() => this.details(rowData)}>
        <Text style={styles.rowTitle}>
          {rowData.title}
        </Text>
        <Text>
          {rowData.author}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.flexContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.signOut()}>
            <Text style={styles.link}>Sign Out</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{this.state.displayName}</Text>
        </View>
        <View style={styles.body}>
          <TextInput
            placeholder='Something on your mind?'
            style={styles.input}
            onChangeText={(text) => this.setState({ title: text })}
            onSubmitEditing={() => this.addTopic()} />
        </View>
        <ListView
          style={styles.list}
          enableEmptySections
          dataSource={this.state.dataSource}
          renderSeparator={this.renderSeparator}
          renderRow={(rowData) => this.renderRow(rowData)} />
      </View>
    );
  }
}
