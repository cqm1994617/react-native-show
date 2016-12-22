import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  item: {
    height: 150,
    marginBottom: 5,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  img: {
    width: 80,
    height: 120,
  },
  main: {
    height: 120,
    marginLeft: 10,
  },
  mainText: {
    marginBottom: 3,
    width: width - 110,
    color: '#666',
    fontSize: 14,
  },
});

const Row = (props, context) => (
  <View style={styles.item}>
    <Image
      source={{ uri: props.data.images.large }}
      style={styles.img}
      resizeMode="cover"
    />
    <View style={styles.main}>
      <Text style={styles.mainText} numberOfLines={1}>电影名: {props.data.title}</Text>
      <Text style={styles.mainText} numberOfLines={1}>原名: {props.data.original_title}</Text>
      <Text style={styles.mainText} numberOfLines={1}>年代: {props.data.year}</Text>
      <Text style={styles.mainText} numberOfLines={1}>条目分类: {props.data.subtype}</Text>
      <Text style={styles.mainText} numberOfLines={1}>收藏数: {props.data.collect_count}</Text>
      <Text style={styles.mainText} numberOfLines={1}>标签: {props.data.genres.join('、')}</Text>
    </View>
  </View>
);

export default Row;
