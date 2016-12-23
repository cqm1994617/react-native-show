import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import NavBar from '../../components/NavBar';
import Row from './components/Row';
import Loading from '../../components/Loading';

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
    this.setState({
      result: result.subjects,
      ok: true
    });
  }

  render() {
    const {result, ok} = this.state;
    return (
      <View style={styles.container}>
        <NavBar
          title="豆瓣电影"
          renderBack
        />
        {
          ok ? <ScrollView style={styles.container}>
              {result.map((data, i) => <Row data={data} key={i}/>)}
            </ScrollView> : <Loading />
        }
      </View>
    );
  }
}
