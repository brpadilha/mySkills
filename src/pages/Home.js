import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';
export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning');
    } else if (currentHour > 12 && currentHour <= 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }
  }, []);

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}> Welcome Bruno </Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button handleAddNewSkill={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>My skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard mySkill={item} />}
      />
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
  greeting: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    padding: Platform.OS ? 15 : 10,
    fontSize: 18,
    marginTop: 30,
    borderRadius: 7,
  },
});
