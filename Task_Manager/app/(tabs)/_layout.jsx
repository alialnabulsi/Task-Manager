// app/(tabs)/_layout.jsx
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../constants/colors.js';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // We'll handle headers in individual screens if needed
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.light.secondary,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.light.border,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
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
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons 
              name="home" 
              size={focused ? 28 : 24} 
              color={color} 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="tasks"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons 
              name="assignment" 
              size={focused ? 28 : 24} 
              color={color} 
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons 
              name="notifications" 
              size={focused ? 28 : 24} 
              color={color} 
            />
          ),
          // You can add badge for notifications count later
          tabBarBadge: undefined, // Will show notification count here
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons 
              name="person" 
              size={focused ? 28 : 24} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}