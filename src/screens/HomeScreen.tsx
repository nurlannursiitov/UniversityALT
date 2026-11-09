import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { s } from '../styles';
import { student, schedule, notices } from '../data';

export default function HomeScreen() {
  const today = schedule['Дс'];
  return (
    <SafeAreaView style={s.screen} edges={['top']}>
      <ScrollView contentContainerStyle={s.scroll}>
        <Header title={`Сәлем, ${student.name.split(' ')[0]}`} sub={`${student.group} · ${student.course}-курс`} />

        <View style={s.hero}>
          <Text style={s.heroLabel}>Орташа балл (GPA)</Text>
          <Text style={s.heroValue}>{student.gpa.toFixed(2)}</Text>
          <Text style={s.heroFoot}>{student.credits} кредит жиналды</Text>
        </View>

        <Text style={s.section}>Бүгінгі сабақтар</Text>
        {today.map((l, i) => (
          <View key={i} style={s.row}>
            <Text style={s.time}>{l.time}</Text>
            <View style={{ flex: 1 }}>
              <Text style={s.rowTitle}>{l.subject}</Text>
              <Text style={s.rowSub}>{l.room} аудитория · {l.teacher}</Text>
            </View>
          </View>
        ))}

        <Text style={s.section}>Соңғы хабарлама</Text>
        <View style={s.card}>
          <Text style={s.rowTitle}>{notices[0].title}</Text>
          <Text style={s.rowSub}>{notices[0].date}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}