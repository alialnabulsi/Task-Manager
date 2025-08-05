// app/(auth)/signup.jsx
import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Pressable, 
  Alert,
  ActivityIndicator,
  ScrollView 
} from 'react-native';
import { Link, router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { saveAuthToken, saveUserData } from '../../src/utils/storage';
import colors from '../../constants/colors.js';
import sizings from '../../constants/sizings.js';

export default function SignupScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return false;
    }

    if (formData.password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // TODO: Replace with your actual signup API call
      // For now, we'll simulate a signup
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      // Mock successful signup
      const mockToken = 'mock_auth_token_' + Date.now();
      const mockUserData = {
        id: Date.now(),
        email: formData.email,
        name: formData.name,
      };

      await saveAuthToken(mockToken);
      await saveUserData(mockUserData);
      
      Alert.alert(
        'Success!', 
        'Your account has been created successfully!',
        [
          {
            text: 'Continue',
            onPress: () => router.replace('/(tabs)')
          }
        ]
      );
      
    } catch (error) {
      Alert.alert('Signup Failed', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join us to get organized!</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#4E7997"
              value={formData.name}
              onChangeText={(value) => handleInputChange('name', value)}
              autoCapitalize="words"
              autoComplete="name"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#4E7997"
              value={formData.email}
              onChangeText={(value) => handleInputChange('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter your password"
                placeholderTextColor="#4E7997"
                value={formData.password}
                onChangeText={(value) => handleInputChange('password', value)}
                secureTextEntry={!showPassword}
                autoComplete="new-password"
              />
              <Pressable 
                style={styles.eyeButton} 
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons 
                  name={showPassword ? "visibility" : "visibility-off"} 
                  size={24} 
                  color="#4E7997" 
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Confirm your password"
                placeholderTextColor="#4E7997"
                value={formData.confirmPassword}
                onChangeText={(value) => handleInputChange('confirmPassword', value)}
                secureTextEntry={!showConfirmPassword}
                autoComplete="new-password"
              />
              <Pressable 
                style={styles.eyeButton} 
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <MaterialIcons 
                  name={showConfirmPassword ? "visibility" : "visibility-off"} 
                  size={24} 
                  color="#4E7997" 
                />
              </Pressable>
            </View>
          </View>

          <Pressable 
            style={[styles.signupButton, isLoading && styles.buttonDisabled]} 
            onPress={handleSignup}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.signupButtonText}>Create Account</Text>
            )}
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Link href="/(auth)/login" asChild>
          <Pressable>
            <Text style={styles.loginLink}>Already have an account? Sign In</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9', // Light gray background matching login
    justifyContent: 'space-between',
  },
  
  content: {
    flex: 1,
  },
  
  scrollContent: {
    paddingHorizontal: 16,
  },
  
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 12,
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0E151B', // Dark text color from HTML
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  
  subtitle: {
    fontSize: 16,
    color: '#0E151B',
    textAlign: 'center',
    fontWeight: '400',
  },
  
  form: {
    paddingTop: 12,
  },
  
  fieldContainer: {
    marginBottom: 16,
    maxWidth: 480, // Max width from HTML
  },
  
  fieldLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0E151B',
    marginBottom: 8,
  },
  
  input: {
    backgroundColor: '#E7EEF3', // Light blue-gray background from HTML
    borderRadius: 12, // Rounded corners
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#0E151B',
    fontWeight: '400',
    minHeight: 56, // Height matching HTML
    borderWidth: 0, // No border like HTML
  },
  
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7EEF3',
    borderRadius: 12,
    minHeight: 56,
  },
  
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#0E151B',
    fontWeight: '400',
    borderWidth: 0,
  },
  
  eyeButton: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  signupButton: {
    backgroundColor: '#1991E6', // Blue color from HTML
    paddingVertical: 16,
    borderRadius: 50, // Fully rounded button
    alignItems: 'center',
    marginTop: 12,
    minHeight: 48,
    maxWidth: 480, // Max width from HTML
  },
  
  buttonDisabled: {
    opacity: 0.7,
  },
  
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  
  loginLink: {
    fontSize: 14,
    color: '#4E7997', // Muted blue color from HTML
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '400',
  },
});