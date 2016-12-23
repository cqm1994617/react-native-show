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
    store: React.PropTypes.object,
  };

  static childContextTypes = {
    navigator: React.PropTypes.object,
    store: React.PropTypes.object,
  };

  getChildContext() {
    const { navigator, store } = this.props;
    return {
      navigator,
      store,
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
