import { View } from "react-native";
import { useSearchParams, usePathname } from "expo-router";
import { Stack } from "expo-router";
import React from "react";

import CharacterList from "~components/character/CharacterList";

const ResultListScreen: React.FC = () => {
  const params = useSearchParams();
  const path = usePathname();
  console.log("in result Screen");
  console.log("path", path);
  console.log(params);
  const page = params.page as string;
  const category = params.category as string;
  const searchName = params.searchName as string;

  return (
    <>
      <Stack.Screen options={{ headerTitle: category }} />
      <View className="flex-1 items-center bg-neutral-700">
        <CharacterList searchName={searchName} page={page} />
      </View>
    </>
  );
};

export default ResultListScreen;
