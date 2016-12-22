import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import NavBar from '../../components/NavBar';
import Row from './components/Row';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class Network extends React.Component {

  state = {
    ok: false,
    result: [],
  };

  async componentWillMount() {
    const response = await fetch('https://api.douban.com/v2/movie/in_theaters');
    const result = await response.json();
    console.log(result.subjects)
    this.setState({
      result: result.subjects,
    });
  }

  render() {
    const {result} = this.state;
    return (
      <View style={styles.container}>
        <NavBar
          title="豆瓣电影"
          renderBack
        />
        <ScrollView style={styles.container}>
          {result.map((data, i) => <Row data={data} key={i}/>)}
        </ScrollView>
      </View>
    );
  }
}
