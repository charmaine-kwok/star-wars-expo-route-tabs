import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="[name]" options={{ headerBackTitleVisible: false }} />
      <Stack.Screen name="resultsList" options={{ headerTitle: "Species" }} />
    </Stack>
  );
}
