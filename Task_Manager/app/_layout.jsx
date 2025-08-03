import { Stack, ThemeProvider } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="welcomeView" options={{ headerShown: false }} />

      </Stack>
    );
}
