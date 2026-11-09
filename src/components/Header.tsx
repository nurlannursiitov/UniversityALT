import React from 'react';
import { View, Text } from 'react-native';
import { s } from '../styles';

export default function Header({ title, sub }: { title: string; sub?: string }) {
  return (
    <View style={s.header}>
      <Text style={s.headerTitle}>{title}</Text>
      {sub ? <Text style={s.headerSub}>{sub}</Text> : null}
    </View>
  );
}