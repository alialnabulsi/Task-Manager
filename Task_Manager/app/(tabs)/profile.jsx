import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Example using Ionicons
import { router } from 'expo-router'; // Import router for navigation

const ProfileScreen = () => {
  const profileImageUri = 'http://googleusercontent.com/file_content/0'; // Replace with your image URI

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.settingsIcon}
             onPress={() => router.push('/settings')} // Use router.push to navigate
            
            >
            <Icon name="settings-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* User Info */}
        <View style={styles.userInfo}>
          <Image source={{ uri: profileImageUri }} style={styles.profileImage} />
          <Text style={styles.userName}>Ethan Carter</Text>
          <Text style={styles.userEmail}>ethan.carter@email.com</Text>
        </View>

        {/* Account Section */}
        <View style={styles.accountSection}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Upgrade</Text>
            <Icon name="chevron-forward-outline" size={20} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Invite Friends</Text>
            <Icon name="chevron-forward-outline" size={20} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Help & Feedback</Text>
            <Icon name="chevron-forward-outline" size={20} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Logout</Text>
            <Icon name="chevron-forward-outline" size={20} color="#888" />
          </TouchableOpacity>
        </View>
      </View>

 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
   header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
    marginTop: 15, 
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  settingsIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#888',
  },
  accountSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
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
    // You can add an active indicator here, e.g., different color
  },
  tabText: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  tabTextActive: {
    fontSize: 12,
    color: '#007bff', // Active color
    marginTop: 4,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;