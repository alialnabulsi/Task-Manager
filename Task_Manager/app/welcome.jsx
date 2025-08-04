// app/welcome.jsx
import { useEffect } from 'react';
import { router } from 'expo-router';
import WelcomeView from '../src/components/WelcomeView';
import { setUserAsNotNew } from '../src/utils/storage';

export default function WelcomeScreen() {
  const handleContinue = async () => {
    try {
      // Mark user as not new anymore
      await setUserAsNotNew();
      
      // Navigate to auth screens since user hasn't logged in yet
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Error setting user as not new:', error);
      // Still navigate even if storage fails
      router.replace('/(auth)/login');
    }
  };

  return <WelcomeView onContinue={handleContinue} />;
}