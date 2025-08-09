import { router } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Example using Ionicons

const tasksData = [
  { id: '1', title: 'Review project proposal', dueDate: 'Due Today', checked: false },
  { id: '2', title: 'Schedule team meeting', dueDate: 'Due Tomorrow', checked: false },
  { id: '3', title: 'Prepare presentation slides', dueDate: 'Due in 2 days', checked: false },
  { id: '4', title: 'Follow up with client', dueDate: 'Due in 3 days', checked: false },
  { id: '5', title: 'Draft project report', dueDate: 'Due in 4 days', checked: false },
];

const TaskItem = ({ item }) => (
  <TouchableOpacity style={styles.taskItem}>
    <View style={styles.taskCheckbox}>
      {/* This is a simple square. You could use an icon here for a more sophisticated look */}
    </View>
    <View style={styles.taskTextContainer}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDueDate}>{item.dueDate}</Text>
    </View>
    <Icon name="chevron-forward-outline" size={24} color="#888"  onPress={() => router.push('/editTasks')}/>
  </TouchableOpacity>
);

const TasksScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tasks</Text>
        <TouchableOpacity>
          {/* This button could navigate to a screen to create a new task */}
          <Icon name="add-circle-outline" size={30} color="#000" onPress={() => router.push('/editTasks')} />
          
        </TouchableOpacity>
      </View>

      {/* Tasks List */}
      <FlatList
        data={tasksData}
        renderItem={({ item }) => <TaskItem item={item} />}
        keyExtractor={item => item.id}
        style={styles.tasksList}
      />

     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 15, 
    
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  tasksList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  taskCheckbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 15,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  taskDueDate: {
    fontSize: 14,
    color: '#888',
  },
  bottomTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  tabItem: {
    alignItems: 'center',
  },
  tabItemActive: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  tabTextActive: {
    fontSize: 12,
    color: '#007bff',
    marginTop: 4,
    fontWeight: 'bold',
  },
});

export default TasksScreen;