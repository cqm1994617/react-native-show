import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#777',
  },
});

const Loading = () => (
  <View style={styles.container}>
    <Text style={styles.text}>加载中</Text>
  </View>
);

export default Loading;
