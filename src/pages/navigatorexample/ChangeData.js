import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
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

export default class ChangeData extends React.Component {

  static contextTypes = {
    navigator: React.PropTypes.object,
  };

  static propTypes = {
    changeValue: React.PropTypes.func,
  };

  back = (z) => {
    this.props.changeValue(z);
    this.context.navigator.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="这个页面没什么卵用"
          renderBack
        />
        <View style={styles.container}>
          <Button
            text="改变上个页面的值"
            to={() => this.back('boom!!!')}
          />
        </View>
      </View>
    );
  }
}
