import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: true,
        headerBackTitle: "Something",
      }}
    >
      <Stack.Screen name="[name]" />
      <Stack.Screen name="resultsList" />
    </Stack>
  );
}
