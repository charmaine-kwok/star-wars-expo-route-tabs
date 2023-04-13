import { View } from "react-native";
import { useSearchParams, Stack, usePathname } from "expo-router";
import { useAtom } from "jotai";

import { currentDetailSpeciesDataAtom } from "~atoms/currentData/speciesData";
import SpeciesDetails from "~components/species/SpeciesDetails";
import SpeciesInfo from "~components/species/SpeciesInfo";

const SpeciesResultDetailScreen: React.FC = () => {
  const [currentDetailSpeciesData, setCurrentDetailSpeciesData] = useAtom(
    currentDetailSpeciesDataAtom
  );
  console.log("SpeciesResultDetailScreen");
  console.log(currentDetailSpeciesData);

  const path = usePathname();
  const params = useSearchParams();
  console.log("params", params);

  console.log("in name species");
  console.log("path", path);

  if (!currentDetailSpeciesData) {
    const searchName = params.searchName as string;

    return (
      <>
        <Stack.Screen options={{ headerTitle: searchName }} />
        <View className="flex-1 items-center bg-neutral-700">
          <SpeciesInfo searchName={searchName} />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerTitle: currentDetailSpeciesData.name }} />
      <View className="flex-1 items-center bg-neutral-700">
        <SpeciesDetails />
      </View>
    </>
  );
};

export default SpeciesResultDetailScreen;
