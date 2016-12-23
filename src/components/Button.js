import React from 'react';
import {
  View,
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
  <TouchableOpacity style={[styles.btn, props.style]} onPress={props.press}>
    <Text style={styles.btnText}>{props.text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  press: React.PropTypes.func,
  style: View.propTypes.style,
};

export default Button;
