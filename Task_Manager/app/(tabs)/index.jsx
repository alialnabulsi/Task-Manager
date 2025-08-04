// app/(tabs)/index.jsx - Home Screen
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { clearUserData } from '../../src/utils/storage';
import colors from '../../constants/colors.js';
import sizings from '../../constants/sizings.js';

export default function HomeScreen() {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: async () => {
            await clearUserData();
            router.replace('/(auth)/login');
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="task-alt" size={50} color={colors.primary} />
        <Text style={styles.title}>Task Manager</Text>
        <Text style={styles.subtitle}>Welcome to your dashboard!</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        
        <Pressable style={styles.actionCard}>
          <MaterialIcons name="add-task" size={30} color={colors.primary} />
          <View style={styles.actionText}>
            <Text style={styles.actionTitle}>Create New Task</Text>
            <Text style={styles.actionSubtitle}>Add a new task to your list</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={colors.light.secondary} />
        </Pressable>

        <Pressable style={styles.actionCard}>
          <MaterialIcons name="today" size={30} color={colors.secondary} />
          <View style={styles.actionText}>
            <Text style={styles.actionTitle}>Today's Tasks</Text>
            <Text style={styles.actionSubtitle}>View tasks due today</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color={colors.light.secondary} />
        </Pressable>
      </View>

      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <MaterialIcons name="logout" size={20} color={colors.white} />
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
}

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
  
  content: {
    flex: 1,
  },
  
  sectionTitle: {
    fontSize: sizings.fontSize.h3,
    fontWeight: 'bold',
    color: colors.dark.primary,
    marginBottom: sizings.margin.medium,
  },
  
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.light.background,
    padding: sizings.padding.medium,
    borderRadius: sizings.borderRadius.medium,
    marginBottom: sizings.margin.medium,
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  
  actionText: {
    flex: 1,
    marginLeft: sizings.margin.medium,
  },
  
  actionTitle: {
    fontSize: sizings.fontSize.button,
    fontWeight: '600',
    color: colors.dark.primary,
  },
  
  actionSubtitle: {
    fontSize: sizings.fontSize.small,
    color: colors.light.secondary,
    marginTop: 2,
  },
  
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.danger,
    paddingVertical: sizings.padding.medium,
    borderRadius: sizings.borderRadius.medium,
    marginBottom: sizings.margin.large,
  },
  
  logoutText: {
    color: colors.white,
    fontSize: sizings.fontSize.button,
    fontWeight: 'bold',
    marginLeft: sizings.margin.small,
  },
});

