import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class NavigatorProvider extends React.Component {

  static propTypes = {
    children: React.PropTypes.element,
  };

  static childContextTypes = {
    navigator: React.PropTypes.object,
  };

  getChildContext() {
    return {
      navigator: this.props.navigator,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}
