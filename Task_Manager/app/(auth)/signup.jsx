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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <MaterialIcons name="person-add" size={60} color={colors.primary} />
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join us to get organized!</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={20} color={colors.light.secondary} />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
            autoCapitalize="words"
            autoComplete="name"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color={colors.light.secondary} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={20} color={colors.light.secondary} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            secureTextEntry={!showPassword}
            autoComplete="new-password"
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <MaterialIcons 
              name={showPassword ? "visibility" : "visibility-off"} 
              size={20} 
              color={colors.light.secondary} 
            />
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={20} color={colors.light.secondary} />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChangeText={(value) => handleInputChange('confirmPassword', value)}
            secureTextEntry={!showConfirmPassword}
            autoComplete="new-password"
          />
          <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <MaterialIcons 
              name={showConfirmPassword ? "visibility" : "visibility-off"} 
              size={20} 
              color={colors.light.secondary} 
            />
          </Pressable>
        </View>

        <Pressable 
          style={[styles.signupButton, isLoading && styles.buttonDisabled]} 
          onPress={handleSignup}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color={colors.white} />
          ) : (
            <Text style={styles.signupButtonText}>Create Account</Text>
          )}
        </Pressable>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Link href="/(auth)/login" asChild>
            <Pressable>
              <Text style={styles.loginLink}>Sign In</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: sizings.padding.large,
  },
  
  header: {
    alignItems: 'center',
    marginTop: sizings.margin.xlarge,
    marginBottom: sizings.margin.large,
  },
  
  title: {
    fontSize: sizings.fontSize.h1,
    fontWeight: 'bold',
    color: colors.dark.primary,
    marginTop: sizings.margin.medium,
    marginBottom: sizings.margin.small,
  },
  
  subtitle: {
    fontSize: sizings.fontSize.body,
    color: colors.light.secondary,
    textAlign: 'center',
  },
  
  form: {
    flex: 1,
    paddingBottom: sizings.padding.xlarge,
  },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.light.border,
    borderRadius: sizings.borderRadius.medium,
    paddingHorizontal: sizings.padding.medium,
    marginBottom: sizings.margin.medium,
    backgroundColor: colors.light.background,
  },
  
  input: {
    flex: 1,
    paddingVertical: sizings.padding.medium,
    paddingHorizontal: sizings.padding.small,
    fontSize: sizings.fontSize.body,
    color: colors.dark.primary,
  },
  
  signupButton: {
    backgroundColor: colors.primary,
    paddingVertical: sizings.padding.medium,
    borderRadius: sizings.borderRadius.medium,
    alignItems: 'center',
    marginTop: sizings.margin.medium,
    marginBottom: sizings.margin.large,
  },
  
  buttonDisabled: {
    opacity: 0.7,
  },
  
  signupButtonText: {
    color: colors.white,
    fontSize: sizings.fontSize.button,
    fontWeight: 'bold',
  },
  
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizings.margin.medium,
  },
  
  loginText: {
    fontSize: sizings.fontSize.body,
    color: colors.light.secondary,
  },
  
  loginLink: {
    fontSize: sizings.fontSize.body,
    color: colors.primary,
    fontWeight: 'bold',
  },
});