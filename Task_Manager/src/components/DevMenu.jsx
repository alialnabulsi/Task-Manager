// src/components/DevMenu.jsx
import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  Modal, 
  Alert 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../constants/colors.js';
import sizings from '../../constants/sizings.js';

const DevMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Only show in development
  if (__DEV__ === false) return null;

  const resetAsNewUser = async () => {
    try {
      await AsyncStorage.clear(); // Clear all storage
      Alert.alert('Reset Complete', 'App reset as new user. Restarting...');
      setIsVisible(false);
      // Force restart the app flow
      router.replace('/welcome');
    } catch (error) {
      Alert.alert('Error', 'Failed to reset app');
    }
  };

  const resetAsReturningUser = async () => {
    try {
      await AsyncStorage.clear();
      // Set as not new user but not logged in
      await AsyncStorage.setItem('hasLaunched', 'true');
      Alert.alert('Reset Complete', 'App reset as returning user (not logged in)');
      setIsVisible(false);
      router.replace('/(auth)/login');
    } catch (error) {
      Alert.alert('Error', 'Failed to reset app');
    }
  };

  const resetAsLoggedInUser = async () => {
    try {
      await AsyncStorage.clear();
      // Set as logged in user
      await AsyncStorage.setItem('hasLaunched', 'true');
      await AsyncStorage.setItem('authToken', 'dev_token_123');
      await AsyncStorage.setItem('userData', JSON.stringify({
        id: 1,
        name: 'Dev User',
        email: 'dev@example.com'
      }));
      Alert.alert('Reset Complete', 'App reset as logged in user');
      setIsVisible(false);
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Error', 'Failed to reset app');
    }
  };

  const showCurrentState = async () => {
    try {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      const authToken = await AsyncStorage.getItem('authToken');
      const userData = await AsyncStorage.getItem('userData');
      
      const state = {
        'Has Launched': hasLaunched || 'null (new user)',
        'Auth Token': authToken || 'null (not logged in)',
        'User Data': userData ? 'exists' : 'null'
      };
      
      const message = Object.entries(state)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
        
      Alert.alert('Current App State', message);
    } catch (error) {
      Alert.alert('Error', 'Failed to get app state');
    }
  };

  return (
    <>
      {/* Floating Dev Button */}
      <Pressable 
        style={styles.devButton} 
        onPress={() => setIsVisible(true)}
      >
        <MaterialIcons name="developer-mode" size={24} color={colors.white} />
      </Pressable>

      {/* Dev Menu Modal */}
      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Developer Menu</Text>
            <Text style={styles.modalSubtitle}>Test different user states</Text>

            <Pressable style={styles.menuButton} onPress={resetAsNewUser}>
              <MaterialIcons name="person-add" size={20} color={colors.primary} />
              <Text style={styles.menuButtonText}>Reset as New User</Text>
            </Pressable>

            <Pressable style={styles.menuButton} onPress={resetAsReturningUser}>
              <MaterialIcons name="login" size={20} color={colors.secondary} />
              <Text style={styles.menuButtonText}>Reset as Returning User</Text>
            </Pressable>

            <Pressable style={styles.menuButton} onPress={resetAsLoggedInUser}>
              <MaterialIcons name="verified-user" size={20} color={colors.success} />
              <Text style={styles.menuButtonText}>Reset as Logged In User</Text>
            </Pressable>

            <Pressable style={styles.menuButton} onPress={showCurrentState}>
              <MaterialIcons name="info" size={20} color={colors.info} />
              <Text style={styles.menuButtonText}>Show Current State</Text>
            </Pressable>

            <Pressable 
              style={styles.closeButton} 
              onPress={() => setIsVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DevMenu;

const styles = StyleSheet.create({
  devButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: colors.danger,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalContent: {
    backgroundColor: colors.white,
    margin: 20,
    borderRadius: sizings.borderRadius.large,
    padding: sizings.padding.large,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  
  modalTitle: {
    fontSize: sizings.fontSize.h2,
    fontWeight: 'bold',
    color: colors.dark.primary,
    marginBottom: sizings.margin.small,
  },
  
  modalSubtitle: {
    fontSize: sizings.fontSize.body,
    color: colors.light.secondary,
    textAlign: 'center',
    marginBottom: sizings.margin.large,
  },
  
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.light.background,
    paddingVertical: sizings.padding.medium,
    paddingHorizontal: sizings.padding.large,
    borderRadius: sizings.borderRadius.medium,
    marginBottom: sizings.margin.medium,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.light.border,
  },
  
  menuButtonText: {
    fontSize: sizings.fontSize.button,
    color: colors.dark.primary,
    marginLeft: sizings.margin.medium,
    fontWeight: '500',
  },
  
  closeButton: {
    backgroundColor: colors.primary,
    paddingVertical: sizings.padding.medium,
    paddingHorizontal: sizings.padding.xlarge,
    borderRadius: sizings.borderRadius.medium,
    marginTop: sizings.margin.medium,
  },
  
  closeButtonText: {
    color: colors.white,
    fontSize: sizings.fontSize.button,
    fontWeight: 'bold',
  },
});