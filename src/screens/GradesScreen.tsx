import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { s } from '../styles';
import { grades, total, gradeColor } from '../data';

function Mark({ label, v }: { label: string; v: number }) {
  return (
    <View style={s.mark}>
      <Text style={s.rowSub}>{label}</Text>
      <Text style={s.markVal}>{v > 0 ? v : '—'}</Text>
    </View>
  );
}

export default function GradesScreen() {
  return (
    <SafeAreaView style={s.screen} edges={['top']}>
      <Header title="Бағалар" sub="1-семестр" />
      <ScrollView contentContainerStyle={s.scroll}>
        {grades.map((g, i) => {
          const t = total(g);
          return (
            <View key={i} style={s.card}>
              <View style={s.spread}>
                <View style={{ flex: 1, paddingRight: 12 }}>
                  <Text style={s.rowTitle}>{g.subject}</Text>
                  <Text style={s.rowSub}>{g.credits} кредит</Text>
                </View>
                <Text style={[s.bigGrade, { color: gradeColor(t) }]}>{t}</Text>
              </View>
              <View style={s.marks}>
                <Mark label="РК1" v={g.rk1} />
                <Mark label="РК2" v={g.rk2} />
                <Mark label="Емтихан" v={g.exam} />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}