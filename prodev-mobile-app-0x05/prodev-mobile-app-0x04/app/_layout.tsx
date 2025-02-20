import { Stack } from 'expo-router'
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="join" options={{ title: 'Join' }} />
      <Stack.Screen name="signin" options={{ title: 'SignIn' }} />
    </Stack>
  )
}
