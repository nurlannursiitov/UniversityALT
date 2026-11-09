import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { C } from './src/theme';
import HomeScreen from './src/screens/HomeScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import GradesScreen from './src/screens/GradesScreen';
import NoticesScreen from './src/screens/NoticesScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const icons: Record<string, [keyof typeof Ionicons.glyphMap, keyof typeof Ionicons.glyphMap]> = {
  Басты: ['home', 'home-outline'],
  Кесте: ['calendar', 'calendar-outline'],
  Бағалар: ['ribbon', 'ribbon-outline'],
  Хабарлар: ['notifications', 'notifications-outline'],
  Профиль: ['person', 'person-outline'],
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: C.accent,
          tabBarInactiveTintColor: C.inkSoft,
          tabBarStyle: { backgroundColor: '#FFFFFF', borderTopColor: C.line },
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={icons[route.name][focused ? 0 : 1]} size={size} color={color} />
          ),
        })}
      >
        <Tab.Screen name="Басты" component={HomeScreen} />
        <Tab.Screen name="Кесте" component={ScheduleScreen} />
        <Tab.Screen name="Бағалар" component={GradesScreen} />
        <Tab.Screen name="Хабарлар" component={NoticesScreen} />
        <Tab.Screen name="Профиль" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}