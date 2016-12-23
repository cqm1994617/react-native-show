import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NavBar from '../../components/NavBar';
import DataMobx3 from './DataMobx3';
import Button from '../../components/Button';
import { observer } from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 150,
  },
});

@observer
export default class DataMobx2 extends React.Component {

  static contextTypes = {
    store: React.PropTypes.object,
    navigator: React.PropTypes.object,
  };

  next = () => {
    this.context.navigator.push({
      component: DataMobx3,
    });
  };

  render() {
    const { store } = this.context;
    return (
      <View style={styles.container}>
        <NavBar
          title="跨页面数据交互(mobx)"
          renderBack
        />
        <View style={[styles.container, styles.center]}>
          <Text>这里有{store.appleNum}个苹果</Text>
          <Button
            text="加一个苹果"
            press={store.addApple}
            style={styles.btn}
          />
          <Button
            text="去下一页"
            press={this.next}
            style={styles.btn}
          />
        </View>
      </View>
    );
  }
}
