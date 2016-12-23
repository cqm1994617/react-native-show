import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import NavBar from '../../components/NavBar';
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
export default class DataMobx4 extends React.Component {

  static contextTypes = {
    store: React.PropTypes.object,
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
          <Button
            text="加一个大菠萝"
            press={store.addPineappleNum}
            style={styles.btn}
          />
          <Button
            text="加一个苹果"
            press={store.addApple}
            style={styles.btn}
          />
          <Button
            text="加一个盆"
            press={store.addBasin}
            style={styles.btn}
          />
        </View>
      </View>
    );
  }
}
