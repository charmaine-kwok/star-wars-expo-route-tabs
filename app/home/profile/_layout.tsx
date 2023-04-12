import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import { useAuth } from "~context/auth";
import { getAuth, signOut } from "firebase/auth";

export default function Layout() {
  const auth = getAuth();
  const { signOut: goBacktoSignInPage } = useAuth();
  return (
    <Stack>
      <Stack.Screen
        name="userInfo"
        options={{
          headerTitle: "Profile",
          headerRight: () => (
            <Pressable
              onPress={() =>
                signOut(auth).then(() => {
                  goBacktoSignInPage();
                })
              }
              className="mr-4"
            >
              <Text>Sign Out</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="likedCharacterList"
        options={{
          headerTitle: "Liked Characters",
        }}
      />
    </Stack>
  );
}
