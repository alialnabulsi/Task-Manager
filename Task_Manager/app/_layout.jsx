// app/_layout.jsx
import { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import { isNewUser, isUserLoggedIn } from '../src/utils/storage';
import { ActivityIndicator, View } from 'react-native';
import DevMenu from '../src/components/DevMenu';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const newUser = await isNewUser();
        const loggedIn = await isUserLoggedIn();
        
        setShowWelcome(newUser);
        setIsAuthenticated(loggedIn);
      } catch (error) {
        console.error('Error checking user status:', error);
        // Default to showing welcome for new users
        setShowWelcome(true);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkUserStatus();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Determine initial route based on user status
  let initialRoute = 'welcome';
  if (!showWelcome && isAuthenticated) {
    initialRoute = '(tabs)';
  } else if (!showWelcome && !isAuthenticated) {
    initialRoute = '(auth)';
  }

  return (
    <>
      <Stack 
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        {/* Welcome screen - only for first time users */}
        <Stack.Screen name="welcome" />
        
        {/* Auth screens - for non-authenticated users */}
        <Stack.Screen name="(auth)" />
        
        {/* Main app screens - for authenticated users */}
        <Stack.Screen name="(tabs)" />
      <Stack.Screen
      name='settings'
      options={{ title: 'Settings', headerShown: false }}
      />
        
        {/* Tasks screen */}
        <Stack.Screen 
          name="editTasks"
          options={{ title: 'Edit Task', headerShown: false }}
        />
        
        {/* Other screens */}
        <Stack.Screen 
          name="+not-found" 
          options={{ title: 'Not Found', headerShown: true }} 
        />
      </Stack>
      
      {/* Developer Menu - only shows in development */}
      <DevMenu />
    </>
  );
}