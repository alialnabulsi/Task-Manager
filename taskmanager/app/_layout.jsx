// App.js or _layout.js (if using expo-router)
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Animated, View, Image } from 'react-native';
import image from '../assets/images/splash-icon.jpg';
SplashScreen.preventAutoHideAsync();

export default function App() {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(async () => {
      await SplashScreen.hideAsync();
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Image
        source={image}
        style={{ opacity: fadeAnim, width: 200, height: 200 }}
        resizeMode="contain"
      />
    </View>
  );
}