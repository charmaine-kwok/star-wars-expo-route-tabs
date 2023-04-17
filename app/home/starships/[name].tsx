import { View } from "react-native";
import { useSearchParams, Stack, usePathname } from "expo-router";
import { useAtom } from "jotai";

import { currentDetailStarshipDataAtom } from "~atoms/currentData/starshipData";
import StarshipDetails from "~components/starship/StarshipDetails";
import StarshipInfo from "~components/starship/StarshipInfo";

const StarshipResultDetailScreen: React.FC = () => {
  const [currentDetailStarshipData, setCurrentDetailStarshipData] = useAtom(
    currentDetailStarshipDataAtom
  );
  console.log("StarshipResultDetailScreen");
  console.log(currentDetailStarshipData);

  const path = usePathname();
  const params = useSearchParams();
  console.log("params", params);

  console.log("in name Starship");
  console.log("path", path);

  if (!currentDetailStarshipData) {
    const searchName = params.searchName as string;

    return (
      <>
        <Stack.Screen options={{ headerTitle: searchName }} />
        <View className="flex-1 items-center bg-neutral-700">
          <StarshipInfo searchName={searchName} />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerTitle: currentDetailStarshipData.name }} />
      <View className="flex-1 items-center bg-neutral-700">
        <StarshipDetails />
      </View>
    </>
  );
};

export default StarshipResultDetailScreen;
