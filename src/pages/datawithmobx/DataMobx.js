import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import NavBar from '../../components/NavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class DataMobx extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="跨页面数据交互(mobx)"
          renderBack
        />
        <View>

        </View>
      </View>
    );
  }
}
