import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export function Button({handleAddNewSkill}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={handleAddNewSkill}>
      <Text style={styles.textButton}>Add</Text>
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
