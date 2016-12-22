import React, { PropTypes } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PixelRatio,
  Platform,
  StatusBar,
} from 'react-native';

const styles = StyleSheet.create({
  navbar: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    height: Platform.OS === 'ios' ? 65 : 50,
    borderBottomWidth: 1 / PixelRatio.get(),
    backgroundColor: '#333',
    borderBottomColor: '#ccc',
    flexDirection: 'row',
  },
  slide: {
    flex: 1,
  },
  center: {
    flex: 3,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#eee',
  },
  backText: {
    color: '#eee',
    fontSize: 13,
  }
});

export default class NavBar extends React.Component {
  static propTypes = {
    renderBack: PropTypes.bool,
    renderLeft: PropTypes.func,
    title: PropTypes.string,
  };

  static contextTypes = {
    navigator: PropTypes.object,
  };

  back = () => {
    this.context.navigator.pop();
  };

  renderLeft() {
    if (this.props.renderLeft) {
      return this.props.renderLeft();
    } else if (this.props.renderBack) {
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={this.back}
        >
          <Text style={styles.backText}>返回</Text>
        </TouchableOpacity>
      );
    }
    return <View style={styles.container} />
  }

  renderRight() {
    if (this.props.renderRight) {
      return this.props.renderLeft();
    }
    return <View style={styles.container} />
  }

  render() {
    return (
      <View style={styles.navbar}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <View style={styles.slide}>{this.renderLeft()}</View>
        <View style={styles.center}>
          <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </View>
        <View style={styles.slide}>{this.renderRight()}</View>
      </View>
    );
  }
}