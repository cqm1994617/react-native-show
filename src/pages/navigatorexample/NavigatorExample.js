import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
} from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import NextPage from './NextPage';
import NextDataPage from './NextDataPage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class NavigatorExample extends React.Component {

  static contextTypes = {
    navigator: React.PropTypes.object,
  };

  //如图，往路由栈中push一个新的页面NextPage
  nextPage = () => {
    this.context.navigator.push({
      component: NextPage,
    });
  };
  //往路由栈中push一个新的页面NextPage
  //同时指定新的页面跳转动画为FloatFromLeft
  nextPage2 = () => {
    this.context.navigator.push({
      component: NextPage,
      sceneConfigs: Navigator.SceneConfigs.FloatFromLeft,
    });
  };
  nextPage3 = () => {
    this.context.navigator.push({
      component: NextPage,
      sceneConfigs: Navigator.SceneConfigs.FadeAndroid,
    });
  };
  nextPage4 = () => {
    this.context.navigator.push({
      component: NextPage,
      sceneConfigs: Navigator.SceneConfigs.VerticalUpSwipeJump,
    });
  };
  //params中为你想传的参数
  nextPage5 = () => {
    this.context.navigator.push({
      component: NextDataPage,
      params: {
        obj: {
          title: '这是标题',
          value: '这是内容',
        },
        text: '这是一段传过来的文字',
      },
    });
  };


  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="跳转动画"
          renderBack
        />
        <Button
          text="pushFromRight"
          press={this.nextPage}
        />
        <Button
          text="FloatFromLeft"
          press={this.nextPage2}
        />
        <Button
          text="FadeAndroid"
          press={this.nextPage3}
        />
        <Button
          text="VerticalUpSwipeJump"
          press={this.nextPage4}
        />
        <Button
          text="往下一个页面传值"
          press={this.nextPage5}
        />
      </View>
    );
  }
}
