import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#a370f7',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 10,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
