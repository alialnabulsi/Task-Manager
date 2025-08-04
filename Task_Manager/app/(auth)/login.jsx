// app/(auth)/login.jsx
import { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Pressable, 
  Alert,
  ActivityIndicator 
} from 'react-native';
import { Link, router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { saveAuthToken, saveUserData } from '../../src/utils/storage';
import colors from '../../constants/colors.js';
import sizings from '../../constants/sizings.js';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Replace with your actual login API call
      // For now, we'll simulate a login
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      // Mock successful login
      const mockToken = 'mock_auth_token_' + Date.now();
      const mockUserData = {
        id: 1,
        email: email,
        name: 'User Name',
      };

      await saveAuthToken(mockToken);
      await saveUserData(mockUserData);
      
      // Navigate to main app
      router.replace('/(tabs)');
      
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="task-alt" size={60} color={colors.primary} />
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="email" size={20} color={colors.light.secondary} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
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
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoComplete="password"
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <MaterialIcons 
              name={showPassword ? "visibility" : "visibility-off"} 
              size={20} 
              color={colors.light.secondary} 
            />
          </Pressable>
        </View>

        <Pressable 
          style={[styles.loginButton, isLoading && styles.buttonDisabled]} 
          onPress={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color={colors.white} />
          ) : (
            <Text style={styles.loginButtonText}>Sign In</Text>
          )}
        </Pressable>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <Link href="/(auth)/signup" asChild>
            <Pressable>
              <Text style={styles.signupLink}>Sign Up</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
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
    marginTop: sizings.margin.xxlarge,
    marginBottom: sizings.margin.xlarge,
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
  
  loginButton: {
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
  
  loginButtonText: {
    color: colors.white,
    fontSize: sizings.fontSize.button,
    fontWeight: 'bold',
  },
  
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  signupText: {
    fontSize: sizings.fontSize.body,
    color: colors.light.secondary,
  },
  
  signupLink: {
    fontSize: sizings.fontSize.body,
    color: colors.primary,
    fontWeight: 'bold',
  },
});