import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Example using Ionicons

const NotificationsScreen = () => {
  const bellImageUri = 'http://googleusercontent.com/file_content/0'; 

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Image
          source={{ uri: bellImageUri }}
          style={styles.bellImage}
        />
        <Text style={styles.noNotificationsTitle}>No notifications</Text>
        <Text style={styles.noNotificationsText}>You're all caught up!</Text>
      </View>

      {/* The bottom tab bar is handled by _layout.jsx, so we don't need to explicitly code it here */}
      {/* You would wrap this screen with a Tabs.Screen component in your (tabs)/_layout.jsx */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  bellImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  noNotificationsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noNotificationsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default NotificationsScreen;