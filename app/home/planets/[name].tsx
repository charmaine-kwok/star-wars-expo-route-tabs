import { View } from "react-native";
import { useSearchParams, Stack, usePathname } from "expo-router";
import { useAtom } from "jotai";

import { currentDetailPlanetDataAtom } from "~atoms/currentData/planetData";
import PlanetDetails from "~components/planet/PlanetDetails";
import PlanetInfo from "~components/planet/PlanetInfo";

const PlanetResultDetailScreen: React.FC = () => {
  const [currentDetailPlanetData, setCurrentDetailPlanetData] = useAtom(
    currentDetailPlanetDataAtom
  );
  console.log("PlanetResultDetailScreen");
  console.log(currentDetailPlanetData);

  const path = usePathname();
  const params = useSearchParams();
  console.log("params", params);

  console.log("in name Planet");
  console.log("path", path);

  const searchName = params.searchName as string;

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: currentDetailPlanetData
            ? currentDetailPlanetData.name
            : searchName,
        }}
      />
      <View className="flex-1 items-center bg-neutral-700">
        {currentDetailPlanetData ? (
          <PlanetDetails />
        ) : (
          <PlanetInfo searchName={searchName} />
        )}
      </View>
    </>
  );
};

export default PlanetResultDetailScreen;
