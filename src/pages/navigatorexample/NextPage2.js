import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';

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

export default class NextPage2 extends React.Component {

  static contextTypes = {
    navigator: React.PropTypes.object,
  };

  backToTop = () => {
    this.context.navigator.popN(2)
  };

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="这个页面没什么卵用"
          renderBack
        />
        <View style={[styles.container, styles.center]}>
          <Text>欢迎来到page-2</Text>
          <Text onPress={this.backToTop}>滚回上上页</Text>
        </View>
      </View>
    );
  }
}
