// app/(tabs)/_layout.jsx
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../constants/colors.js';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.light.secondary,
    tabBarStyle: {
  backgroundColor: colors.white,
  borderTopWidth: 1,
  borderTopColor: '#e0e0e0',
  paddingTop: 5,
  paddingBottom: Math.max(insets.bottom, 8), // Safe padding for gestures
  height: 60 + insets.bottom, // Adjusts automatically for safe area
  position: 'absolute',
  left: 10,
  right: 10,
  bottom: insets.bottom ? insets.bottom : 10, // keeps it above gestures
  borderRadius: 20,
  // Removed shadowColor, shadowOpacity, shadowOffset, shadowRadius, elevation
},

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? colors.primary : colors.light.secondary}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'checkbox' : 'checkbox-outline'}
              size={24}
              color={focused ? colors.primary : colors.light.secondary}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'notifications' : 'notifications-outline'}
              size={24}
              color={focused ? colors.primary : colors.light.secondary}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={24}
              color={focused ? colors.primary : colors.light.secondary}
            />
          ),
        }}
      />
    </Tabs>
  );
}
