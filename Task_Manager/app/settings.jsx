import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Using Ionicons for the icons
import{ router } from 'expo-router'; // Import router for navigation

// A reusable component for each setting item
const SettingItem = ({ iconName, text, onPress }) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Icon name={iconName} size={24} color="#555" />
    </View>
    <Text style={styles.settingText}>{text}</Text>
    <Icon name="chevron-forward-outline" size={24} color="#888" />
  </TouchableOpacity>
);

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          {/* Back button icon */}
          <Icon name="arrow-back-outline" size={24} color="#000" onPress={() => router.back()} />
        
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* General Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>General</Text>
          <SettingItem iconName="notifications-outline" text="Notifications" onPress={() => console.log('Notifications')} />
          <SettingItem iconName="sunny-outline" text="Theme" onPress={() => console.log('Theme')} />
          <SettingItem iconName="globe-outline" text="Language" onPress={() => console.log('Language')} />
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <SettingItem iconName="person-outline" text="Manage Account" onPress={() => console.log('Manage Account')} />
          <SettingItem iconName="shield-checkmark-outline" text="Security" onPress={() => console.log('Security')} />
          <SettingItem iconName="log-out-outline" text="Logout" onPress={() => console.log('Logout')} />
        </View>
      </ScrollView>

    
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 15, 
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconContainer: {
    width: 30,
    alignItems: 'center',
  },
  settingText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
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

export default SettingsScreen;