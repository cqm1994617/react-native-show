import React from 'react';
import {
  Animated,
  Easing,
  LayoutAnimation,
  UIManager,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import NavBar from '../../components/NavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  block: {
    margin: 15,
    backgroundColor: 'aqua',
  },
  textContainer: {
    padding: 15,
    backgroundColor: 'transparent',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'red',
    margin: 10,
  },
});

export default class Animation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 100,
      height: 100,
      rotateZ: new Animated.Value(0),
      rotateY: new Animated.Value(0),
      scale: new Animated.Value(1),
      moveX: new Animated.Value(0),
    };
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentDidMount() {
    Animated.timing(this.state.rotateY, {
      toValue: 100,
      duration: 4000,
      easing: Easing.linear,
    }).start();
  }

  sequence = () => {
    Animated.sequence([
      Animated.timing(this.state.moveX, {
        toValue: 200,
        duration: 500,
      }),
      Animated.parallel([
        Animated.timing(this.state.rotateZ, {
          toValue: 1,
          duration: 3000,
        }),
        Animated.timing(this.state.scale, {
          toValue: 1.5,
          duration: 3000,
        }),
      ]),
    ]).start();
  };

  bigger = () => {
    LayoutAnimation.spring();
    const { width, height } = this.state;
    if (width < 251) {
      this.setState({
        width: width + 50,
        height: height + 50,
      });
    }
  };

  smaller = () => {
    LayoutAnimation.spring();
    const { width, height } = this.state;
    if (width > 0) {
      this.setState({
        width: width - 50,
        height: height - 50,
      });
    }
  };

  render() {
    const { width, height } = this.state;
    const rotateY = this.state.rotateY.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '1600deg']
    });
    const rotateZ = this.state.rotateZ.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View style={styles.container}>
        <NavBar
          title="动画"
          renderBack
        />
        <View style={[styles.block, { width, height, }]} />
        <TouchableOpacity
          style={styles.textContainer}
          onPress={this.bigger}
        >
          <Text>点击放大(LayoutAnimation)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textContainer}
          onPress={this.smaller}
        >
          <Text>点击缩小(LayoutAnimation)</Text>
        </TouchableOpacity>

        <Animated.View style={[styles.circle, {
          transform: [{
            rotateY,
          }]
        }]} />

        <Animated.View style={[styles.block, {
          width: 100,
          height: 100,
          transform: [
            { translateX: this.state.moveX },
            { scale: this.state.scale },
            { rotateZ }
          ]
        }]} />
        <TouchableOpacity
          style={styles.textContainer}
          onPress={this.sequence}
        >
          <Text>顺序动画~~~</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
