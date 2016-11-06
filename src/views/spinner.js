import React from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native';
import styles from '../styles';

const Spinner = () => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator
      size='small'
      style={styles.activityIndicator} />
  </View>
);

export default Spinner;
