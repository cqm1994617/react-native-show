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

  nextPage = () => {
    this.context.navigator.push({
      component: NextPage,
    });
  };
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
          to={this.nextPage}
        />
        <Button
          text="FloatFromLeft"
          to={this.nextPage2}
        />
        <Button
          text="FadeAndroid"
          to={this.nextPage3}
        />
        <Button
          text="VerticalUpSwipeJump"
          to={this.nextPage4}
        />
        <Button
          text="往下一个页面传值"
          to={this.nextPage5}
        />
      </View>
    );
  }
}
