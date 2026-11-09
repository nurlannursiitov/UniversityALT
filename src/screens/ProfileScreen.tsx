import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { s } from '../styles';
import { student } from '../data';

export default function ProfileScreen() {
  const items: [string, string][] = [
    ['Студент ID', student.id],
    ['Факультет', student.faculty],
    ['Топ', student.group],
    ['Курс', String(student.course)],
    ['Кредит', String(student.credits)],
  ];
  return (
    <SafeAreaView style={s.screen} edges={['top']}>
      <Header title="Профиль" />
      <ScrollView contentContainerStyle={s.scroll}>
        <View style={s.profileTop}>
          <View style={s.avatar}>
            <Text style={s.avatarText}>{student.name.split(' ').map((w) => w[0]).join('')}</Text>
          </View>
          <Text style={s.profileName}>{student.name}</Text>
        </View>
        <View style={s.card}>
          {items.map(([k, v], i) => (
            <View key={k} style={[s.spread, i > 0 && s.divider]}>
              <Text style={s.rowSub}>{k}</Text>
              <Text style={s.rowTitle}>{v}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={s.logout}>
          <Text style={s.logoutText}>Шығу</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}