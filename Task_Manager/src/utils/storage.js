// src/utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Keys for storage
const STORAGE_KEYS = {
  HAS_LAUNCHED: 'hasLaunched',
  AUTH_TOKEN: 'authToken',
  USER_DATA: 'userData',
};

// Check if user is new (first time opening the app)
export const isNewUser = async () => {
  try {
    const hasLaunched = await AsyncStorage.getItem(STORAGE_KEYS.HAS_LAUNCHED);
    return hasLaunched === null; // New user if no launch record
  } catch (error) {
    console.error('Error checking if new user:', error);
    return true; // Assume new user on error
  }
};

// Mark user as not new (has seen welcome screen)
export const setUserAsNotNew = async () => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.HAS_LAUNCHED, 'true');
  } catch (error) {
    console.error('Error setting user as not new:', error);
  }
};

// Check if user is logged in
export const isUserLoggedIn = async () => {
  try {
    const token = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    return token !== null;
  } catch (error) {
    console.error('Error checking login status:', error);
    return false;
  }
};

// Save authentication token
export const saveAuthToken = async (token) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  } catch (error) {
    console.error('Error saving auth token:', error);
    throw error;
  }
};

// Get authentication token
export const getAuthToken = async () => {
  try {
    return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  } catch (error) {
    console.error('Error getting auth token:', error);
    return null;
  }
};

// Remove authentication token (logout)
export const removeAuthToken = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  } catch (error) {
    console.error('Error removing auth token:', error);
  }
};

// Save user data
export const saveUserData = async (userData) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
  } catch (error) {
    console.error('Error saving user data:', error);
    throw error;
  }
};

// Get user data
export const getUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};

// Clear all user data (complete logout)
export const clearUserData = async () => {
  try {
    await AsyncStorage.multiRemove([
      STORAGE_KEYS.AUTH_TOKEN,
      STORAGE_KEYS.USER_DATA,
    ]);
  } catch (error) {
    console.error('Error clearing user data:', error);
  }
};