import { Link, useRouter } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App({ navigation }) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          router.back();
        }}
      >
        Open settings dynamic
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
