import React from "react";
import { View, Text } from "react-native";
import { useAtom } from "jotai";
import { Stack, Tabs } from "expo-router";

import { randomIdAtom } from "../../src/atoms/randomId";
import MyButton from "../../src/components/MyButton";
import getRandom from "../../src/functions/getRandom";
import RandomCharacterInfo from "../../src/components/character/RandomCharacterInfo";

const RandomScreen: React.FC = () => {
  const [randomId, setRandomId] = useAtom(randomIdAtom);
  console.log(randomId);

  function onPressHandler(): void {
    let randomNum = getRandom(1, 84, 17);
    setRandomId(randomNum);
    console.log(randomId);
  }

  return (
    <>
      <Stack.Screen options={{ headerTitle: "Random Character" }} />

      <View className="flex-1 items-center text-center bg-neutral-700">
        <MyButton onPress={onPressHandler}>
          <Text className="text-white text-lg font-semibold">
            Press to get a Star-Wars character
          </Text>
        </MyButton>

        {randomId !== 0 && (
          <Text className="font-bold text-2xl text-white ">
            Your character today:
          </Text>
        )}

        {randomId !== 0 && <RandomCharacterInfo randomNumber={randomId} />}
      </View>
    </>
  );
};

export default RandomScreen;
