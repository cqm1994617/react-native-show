import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
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
});

const Button = (props, context) => (
  <TouchableOpacity style={styles.btn} onPress={props.to}>
    <Text style={styles.btnText}>{props.text}</Text>
  </TouchableOpacity>
);

export default Button;
