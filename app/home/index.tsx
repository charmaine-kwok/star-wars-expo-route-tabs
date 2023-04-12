import { View, Text, Pressable } from "react-native";
import { Link, Stack } from "expo-router";
import { useAtom } from "jotai";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

import { randomIdAtom } from "~atoms/randomId";
import MyButton from "~components/buttons/MyButton";

const Home: React.FC = () => {
  const [randomId, setRandomId] = useAtom(randomIdAtom);

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <Pressable className="mr-4">
              <Link href="/modal">
                <AntDesign
                  name="infocirlceo"
                  size={18}
                  color="black"
                ></AntDesign>
              </Link>
            </Pressable>
          ),
        }}
      />
      <View className="bg-neutral-700 flex-1 items-center text-center">
        <MyButton
          onPress={() => {
            setRandomId(0);
          }}
        >
          <Link href="/home/random">
            <Text className="text-white text-base font-semibold">
              Who's your character today?
            </Text>
          </Link>
        </MyButton>
        <MyButton>
          <Link href="/home/SearchSelectCategory">
            <Text className="text-white text-base font-semibold">
              Search the Star Wars Galaxy
            </Text>
          </Link>
        </MyButton>

        {/* testing */}
        <MyButton>
          <Link href="/home/BarCodeScanner">
            <Text className="text-white text-base font-semibold">
              Scan your QR code here
            </Text>
          </Link>
        </MyButton>

        <StatusBar style="dark" />
      </View>
    </>
  );
};

export default Home;
