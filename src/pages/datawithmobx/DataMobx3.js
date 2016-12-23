import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NavBar from '../../components/NavBar';
import DataMobx4 from './DataMobx4';
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
export default class DataMobx3 extends React.Component {

  static contextTypes = {
    store: React.PropTypes.object,
    navigator: React.PropTypes.object,
  };

  next = () => {
    this.context.navigator.push({
      component: DataMobx4,
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
          <Text>这里有{store.pineappleNum}个大菠萝</Text>
          <Button
            text="加一个大菠萝"
            press={store.addPineappleNum}
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
