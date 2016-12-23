import React from 'react';
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import NavBar from '../../components/NavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  block: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#ccc',
    height: 50,
  },
  textBlock: {
    marginTop: 20,
    marginHorizontal: 10,
    padding: 15,
    backgroundColor: '#eee',
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
  item: {
    width: 90,
    height: 90,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  itemBlock: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap', //超出换行
    marginHorizontal: 10,
  },
});

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

export default class Home extends React.Component {

  btnClick = () => {
    Alert.alert('你点击了这个按钮~');
  };

  itemClick = (z) => {
    Alert.alert(`你点击了第${z}个元素`);
  };

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          renderBack
          title="main"
        />
        <ScrollView style={styles.container}>
          <View style={styles.block}/>
          <View style={styles.block}/>
          <View style={styles.block}/>

          <View style={styles.textBlock}>
            <Text>我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字我是一段文字</Text>
          </View>
          <View style={styles.textBlock}>
            <Text numberOfLines={1}>我是一段超出一行就隐藏的文字我是一段超出一行就隐藏的文字我是一段超出一行就隐藏的文字</Text>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={this.btnClick}
          >
            <Text style={styles.btnText}>我是一个触摸操作视图</Text>
          </TouchableOpacity>

          <View style={styles.itemBlock}>
            {arr.map((z, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => this.itemClick(z)}
                style={styles.item}
              >
                <Text>{z}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}
