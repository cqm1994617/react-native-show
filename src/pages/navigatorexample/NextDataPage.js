import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import ChangeData from './ChangeData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueText: {
    color: 'red',
    marginTop: 15,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 25,
    fontSize: 17,
  },
});

export default class NextDataPage extends React.Component {

  static contextTypes = {
    navigator: React.PropTypes.object,
  };

  static propTypes = {
    obj: React.PropTypes.object,
    text: React.PropTypes.string,
  };

  state = {
    value: '我是这个页面的字符串啦啦啦啦',
  };

  changeValue = (value) => {
    this.setState({
      value,
    });
  };

  next = () => {
    this.context.navigator.push({
      component: ChangeData,
      params: {
        changeValue: this.changeValue,
      },
    });
  };

  render() {
    const { obj, text } = this.props;
    const { value } = this.state;
    return (
      <View style={styles.container}>
        <NavBar
          title="这个页面没什么卵用"
          renderBack
        />
        <View style={[styles.container, styles.center]}>
          <Text style={styles.title}>这个页面的值(存在state里)</Text>
          <Text style={styles.valueText}>{value}</Text>
          <Text style={styles.title}>上个页面传过来的值:</Text>
          <Text style={styles.valueText}>obj: {JSON.stringify(obj)}</Text>
          <Text style={styles.valueText}>text: {text}</Text>
        </View>
        <Button
          text="下一个页面"
          press={this.next}
        />
      </View>
    );
  }
}
