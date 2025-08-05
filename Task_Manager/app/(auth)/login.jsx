import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { Link, router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
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
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockToken = 'mock_auth_token_' + Date.now();
      const mockUserData = {
        id: 1,
        email: email,
        name: 'User Name',
      };

      await saveAuthToken(mockToken);
      await saveUserData(mockUserData);

      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Login Failed', 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Welcome Back!</Text>
              <Text style={styles.subtitle}>Sign in to your account</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#4E7997"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                />
              </View>

              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.input, showPassword ? {} : { paddingRight: 50 }]}
                  placeholder="Password"
                  placeholderTextColor="#4E7997"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoComplete="password"
                />
                <Pressable
                  style={styles.eyeIcon}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <MaterialIcons
                    name={showPassword ? "visibility" : "visibility-off"}
                    size={20}
                    color="#4E7997"
                  />
                </Pressable>
              </View>

              <Pressable
                style={[styles.loginButton, isLoading && styles.buttonDisabled]}
                onPress={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.loginButtonText}>Sign In</Text>
                )}
              </Pressable>
            </View>
          </View>

          <View style={styles.footer}>
            <Link href="/(auth)/signup" asChild>
              <Pressable>
                <Text style={styles.signupLink}>Don't have an account? Sign Up</Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 32, // Ensures content stays above gesture nav
  },
  content: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0E151B',
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
  inputWrapper: {
    position: 'relative',
    marginBottom: 16,
    maxWidth: 480,
  },
  input: {
    backgroundColor: '#E7EEF3',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#0E151B',
    fontWeight: '400',
    minHeight: 56,
    borderWidth: 0,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 18,
    padding: 4,
  },
  loginButton: {
    backgroundColor: '#1991E6',
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 12,
    minHeight: 48,
    maxWidth: 480,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 24,
    paddingTop: 12,
  },
  signupLink: {
    fontSize: 14,
    color: '#4E7997',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '400',
  },
});
