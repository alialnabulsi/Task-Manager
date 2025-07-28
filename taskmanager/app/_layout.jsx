import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet, StatusBar, View } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    padding: 0, // remove padding to let child pages handle their own spacing
  },
});
