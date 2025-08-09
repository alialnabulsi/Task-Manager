// app/(tabs)/index.jsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      
        <Text style={styles.headerTitle}>Task Manager</Text>
      </View>

      <View style={styles.content}>
        {/* Welcome Section */}
        <Text style={styles.welcomeMessage}>Welcome to your dashboard!</Text>

        {/* Quick Actions Section */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActionsContainer}>
          {/* Create New Task Card */}
          <TouchableOpacity style={styles.actionCard}>
            <View>
              <Text style={styles.actionTitle}>Create New Task</Text>
              <Text style={styles.actionDescription}>Add a new task to your list</Text>
            </View>
            <Ionicons name="add-circle-outline" size={36} color="#000" />
          </TouchableOpacity>

          {/* Today's Tasks Card */}
          <TouchableOpacity style={styles.actionCard}>
            <View>
              <Text style={styles.actionTitle}>Today's Tasks</Text>
              <Text style={styles.actionDescription}>View and manage tasks for today</Text>
            </View>
            <Ionicons name="calendar-outline" size={36} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
   header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
    marginTop:30, 
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  welcomeMessage: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  quickActionsContainer: {
    gap: 15,
  },
  actionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionDescription: {
    fontSize: 14,
    color: '#888',
  },
});

export default HomeScreen;