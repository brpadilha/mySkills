import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
export function SkillCard({mySkill}) {
  return (
    <TouchableOpacity style={styles.buttonSkills}>
      <Text style={styles.textSkill}>{mySkill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  buttonSkills: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },
});
