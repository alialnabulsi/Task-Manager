// ===== SEPARATE FILES =====

// app/(tabs)/tasks.jsx - Tasks Screen
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../constants/colors.js';
import sizings from '../../constants/sizings.js';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="assignment" size={50} color={colors.primary} />
        <Text style={styles.title}>Tasks</Text>
        <Text style={styles.subtitle}>Manage your tasks</Text>
      </View>
      
      <View style={styles.emptyState}>
        <MaterialIcons name="task-alt" size={80} color={colors.light.secondary} />
        <Text style={styles.emptyTitle}>No tasks yet</Text>
        <Text style={styles.emptySubtitle}>Create your first task to get started</Text>
      </View>
    </View>
  );
}

// app/(tabs)/notifications.jsx - Notifications Screen  
export function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="notifications" size={50} color={colors.primary} />
        <Text style={styles.title}>Notifications</Text>
        <Text style={styles.subtitle}>Stay updated</Text>
      </View>
      
      <View style={styles.emptyState}>
        <MaterialIcons name="notifications-none" size={80} color={colors.light.secondary} />
        <Text style={styles.emptyTitle}>No notifications</Text>
        <Text style={styles.emptySubtitle}>You're all caught up!</Text>
      </View>
    </View>
  );
}

// app/(tabs)/profile.jsx - Profile Screen
export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="person" size={50} color={colors.primary} />
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subtitle}>Your account settings</Text>
      </View>
      
      <View style={styles.emptyState}>
        <MaterialIcons name="settings" size={80} color={colors.light.secondary} />
        <Text style={styles.emptyTitle}>Profile Settings</Text>
        <Text style={styles.emptySubtitle}>Customize your account</Text>
      </View>
    </View>
  );
}

// Shared styles for all tab screens
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizings.padding.large,
    paddingTop: sizings.padding.xlarge,
  },
  
  header: {
    alignItems: 'center',
    marginBottom: sizings.margin.xlarge,
  },
  
  title: {
    fontSize: sizings.fontSize.h1,
    fontWeight: 'bold',
    color: colors.dark.primary,
    marginTop: sizings.margin.small,
  },
  
  subtitle: {
    fontSize: sizings.fontSize.body,
    color: colors.light.secondary,
    marginTop: sizings.margin.xsmall,
  },
  
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  emptyTitle: {
    fontSize: sizings.fontSize.h2,
    fontWeight: 'bold',
    color: colors.dark.primary,
    marginTop: sizings.margin.medium,
  },
  
  emptySubtitle: {
    fontSize: sizings.fontSize.body,
    color: colors.light.secondary,
    textAlign: 'center',
    marginTop: sizings.margin.small,
  },
});