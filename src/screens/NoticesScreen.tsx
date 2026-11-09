import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { s } from '../styles';
import { notices } from '../data';

export default function NoticesScreen() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <SafeAreaView style={s.screen} edges={['top']}>
      <Header title="Хабарламалар" sub={`${notices.filter((n) => n.unread).length} оқылмаған`} />
      <ScrollView contentContainerStyle={s.scroll}>
        {notices.map((n) => (
          <TouchableOpacity key={n.id} style={s.card} onPress={() => setOpen(open === n.id ? null : n.id)}>
            <View style={s.spread}>
              <Text style={[s.rowTitle, { flex: 1 }]}>{n.title}</Text>
              {n.unread ? <View style={s.dot} /> : null}
            </View>
            <Text style={s.rowSub}>{n.date}</Text>
            {open === n.id ? <Text style={s.body}>{n.text}</Text> : null}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}