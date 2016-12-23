import React from 'react';
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import NavBar from '../components/NavBar';
import Basic from './basic/Basic';
import NavigatorExample from './navigatorexample/NavigatorExample';
import DataMobx from './datawithmobx/DataMobx';
import Animation from './animation/Animation';
import Network from './network/Network';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    height: 40,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#0ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
  },
});

export default class Home extends React.Component {

  static contextTypes = {
    navigator: React.PropTypes.object,
  };

  toBasic = () => {
    this.context.navigator.push({
      component: Basic,
    });
  };

  toRoute = () => {
    this.context.navigator.push({
      component: NavigatorExample,
    });
  };

  toDataMobx = () => {
    this.context.navigator.push({
      component: DataMobx,
    })
  };

  toAnimation = () => {
    this.context.navigator.push({
      component: Animation,
    });
  };

  toNetwork = () => {
    this.context.navigator.push({
      component: Network,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="首页"
        />
        <Button
          text="基本样式"
          press={this.toBasic}
        />
        <Button
          text="导航器示例"
          press={this.toRoute}
        />
        <Button
          text="跨页面信息交互(mobx)"
          press={this.toDataMobx}
        />
        <Button
          text="动画"
          press={this.toAnimation}
        />
        <Button
          text="向豆瓣API发起请求"
          press={this.toNetwork}
        />
      </View>
    )
  }
}
