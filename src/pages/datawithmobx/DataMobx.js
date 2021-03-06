import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import DataMobx2 from './DataMobx2';
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
export default class DataMobx extends React.Component {

  static contextTypes = {
    store: React.PropTypes.object,
    navigator: React.PropTypes.object,
  };

  next = () => {
    this.context.navigator.push({
      component: DataMobx2,
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
          <Text>这里有{store.basinNum}个盆</Text>
          <Button
            text="加一个盆"
            press={store.addBasin}
            style={styles.btn}
          />
          <Button
            text="清空所有东西的数量"
            press={store.clear}
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
