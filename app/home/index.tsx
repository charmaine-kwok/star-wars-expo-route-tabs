import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useAtom } from "jotai";
import { StatusBar } from "expo-status-bar";
import { isModalVisibleAtom } from "../../src/atoms/isModalVisible";

import { randomIdAtom } from "../../src/atoms/randomId";
import MyButton from "../../src/components/MyButton";
import React from "react";

const Home: React.FC = () => {
  const [randomId, setRandomId] = useAtom(randomIdAtom);
  const [isModalVisible, setIsModalVisible] = useAtom(isModalVisibleAtom);
  console.log(isModalVisible);

  return (
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
        <Link href="/home/search">
          <Text className="text-white text-base font-semibold">
            Search a Star Wars Character
          </Text>
        </Link>
      </MyButton>
      <StatusBar style="dark" />
    </View>
  );
};

export default Home;
