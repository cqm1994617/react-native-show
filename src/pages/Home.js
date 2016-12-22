import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Home extends React.Component {

  static contextTypes = {
    navigator: React.PropTypes.object,
  };

  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <View style={styles.block} />
      </View>
    )
  }
}
