import "expo-router/entry";
import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  const ctx = require.context("./app");
  return (
    <QueryClientProvider client={queryClient}>
      <ExpoRoot context={ctx} />
    </QueryClientProvider>
  );
}

registerRootComponent(App);
