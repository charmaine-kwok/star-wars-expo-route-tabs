import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="[name]" />
      <Stack.Screen name="resultsList" options={{ headerTitle: "Films" }} />
    </Stack>
  );
}
