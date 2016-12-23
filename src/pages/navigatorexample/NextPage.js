import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NavBar from '../../components/NavBar';
import NextPage2 from './NextPage2';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class NextPage extends React.Component {

  static contextTypes = {
    navigator: React.PropTypes.object,
  };

  nextPage = () => {
    this.context.navigator.push({
      component: NextPage2,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="这个页面没什么卵用"
          renderBack
        />
        <View style={[styles.container, styles.center]}>
          <Text>欢迎来到page-1</Text>
          <Text onPress={this.nextPage}>前往page-2</Text>
        </View>
      </View>
    );
  }
}
