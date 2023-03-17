import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "hi" }} />
      <Stack.Screen
        name="results"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
