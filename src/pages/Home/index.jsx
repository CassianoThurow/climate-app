import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forcast from '../../components/Forcast';

const myList = [
  {
    date: '13/03',
    weekday: 'Sáb',
    max: 26,
    min: 18,
    description: 'Tempestades',
    condition: 'clear_day',
  },
  {
    date: '14/03',
    weekday: 'Dom',
    max: 27,
    min: 17,
    description: 'Tempestades',
    condition: 'storm',
  },
  {
    date: '15/03',
    weekday: 'Seg',
    max: 27,
    min: 17,
    description: 'Tempestades',
    condition: 'storm',
  },
  {
    date: '16/03',
    weekday: 'Ter',
    max: 27,
    min: 18,
    description: 'Tempestades',
    condition: 'storm',
  },
  {
    date: '17/03',
    weekday: 'Qua',
    max: 28,
    min: 18,
    description: 'Tempestades isoladas',
    condition: 'storm',
  },
  {
    date: '18/03',
    weekday: 'Qui',
    max: 27,
    min: 18,
    description: 'Tempestades',
    condition: 'storm',
  },
  {
    date: '19/03',
    weekday: 'Sex',
    max: 24,
    min: 19,
    description: 'Tempestades',
    condition: 'storm',
  },
  {
    date: '20/03',
    weekday: 'Sáb',
    max: 25,
    min: 19,
    description: 'Tempestades',
    condition: 'storm',
  },
  {
    date: '21/03',
    weekday: 'Dom',
    max: 27,
    min: 18,
    description: 'Parcialmente nublado',
    condition: 'cloudly_day',
  },
  {
    date: '22/03',
    weekday: 'Seg',
    max: 27,
    min: 19,
    description: 'Tempo nublado',
    condition: 'cloud',
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />
      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list}
        data={myList}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forcast data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%',
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
  },
});
