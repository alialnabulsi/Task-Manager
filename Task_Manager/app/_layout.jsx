import { Stack, ThemeProvider } from "expo-router";

export default function RootLayout() {
    return (<ThemeProvider>
        <Stack>
            <Stack.Screen name="views" options={{ headerShown: false }} />
        </Stack>
    </ThemeProvider>);
}
