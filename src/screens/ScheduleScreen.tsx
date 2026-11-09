import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { s } from '../styles';
import { schedule } from '../data';

export default function ScheduleScreen() {
  const days = Object.keys(schedule);
  const [day, setDay] = useState(days[0]);
  return (
    <SafeAreaView style={s.screen} edges={['top']}>
      <Header title="Сабақ кестесі" sub="Апталық кесте" />
      <View style={s.tabs}>
        {days.map((d) => (
          <TouchableOpacity key={d} onPress={() => setDay(d)} style={[s.tab, day === d && s.tabOn]}>
            <Text style={[s.tabText, day === d && s.tabTextOn]}>{d}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={s.scroll}>
        {schedule[day].map((l, i) => (
          <View key={i} style={s.row}>
            <Text style={s.time}>{l.time}</Text>
            <View style={{ flex: 1 }}>
              <Text style={s.rowTitle}>{l.subject}</Text>
              <Text style={s.rowSub}>{l.room} аудитория · {l.teacher}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}