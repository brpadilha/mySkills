import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}> Welcome Bruno </Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textButton}>Add</Text>
      </TouchableOpacity>
      <Text style={[styles.title, {marginTop: 50}]}>My Skill</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#ffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    padding: Platform.OS ? 15 : 10,
    fontSize: 18,
    marginTop: 30,
    borderRadius: 7,
  },
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
