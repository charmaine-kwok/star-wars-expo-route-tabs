import { View } from "react-native";
import ResultList from "../../../../../src/components/ResultList";
import { useSearchParams } from "expo-router";
import { Stack } from "expo-router";
import React from "react";

const ResultListScreen: React.FC = () => {
  const params = useSearchParams();
  console.log("in result Screen");
  console.log(params);
  const page = params.page as string;
  const category = params.category as string;
  const searchName = params.searchName as string;
  return (
    <>
      <Stack.Screen options={{ headerTitle: category }} />
      <View className="flex-1 items-center bg-neutral-700">
        <ResultList page={page} category={category} searchName={searchName} />
      </View>
    </>
  );
};

export default ResultListScreen;
