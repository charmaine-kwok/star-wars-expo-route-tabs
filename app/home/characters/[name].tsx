import { View } from "react-native";
import { useSearchParams, Stack, usePathname } from "expo-router";
import { useAtom } from "jotai";
import { currentDetailCharacterDataAtom } from "~atoms/currentData/characterData";
import CharacterInfo from "~components/character/CharacterInfo";
import CharacterFetch from "~components/character/CharacterFetch";

const CharacterResultDetailScreen: React.FC = () => {
  const [currentDetailCharacterData, setCurrentDetailCharacterData] = useAtom(
    currentDetailCharacterDataAtom
  );
  const path = usePathname();
  const params = useSearchParams();
  console.log("params");
  console.log("in the character name scene");

  console.log("params", params);
  console.log("path", path);
  console.log("currentDetailCharacterData", currentDetailCharacterData);

  const searchName = params.searchName as string;

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: currentDetailCharacterData
            ? currentDetailCharacterData.name
            : searchName,
        }}
      />
      <View className="flex-1 items-center bg-neutral-700">
        {currentDetailCharacterData ? (
          <CharacterInfo />
        ) : (
          <CharacterFetch searchName={searchName} />
        )}
      </View>
    </>
  );
};

export default CharacterResultDetailScreen;
