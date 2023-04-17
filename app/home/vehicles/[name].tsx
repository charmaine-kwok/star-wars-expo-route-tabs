import { View } from "react-native";
import { useSearchParams, Stack, usePathname } from "expo-router";
import { useAtom } from "jotai";

import { currentDetailVehicleDataAtom } from "~atoms/currentData/vehicleData";
import VehicleDetails from "~components/vehicle/VehicleDetails";
import VehicleInfo from "~components/vehicle/VehicleInfo";

const VehicleResultDetailScreen: React.FC = () => {
  const [currentDetailVehicleData, setCurrentDetailVehicleData] = useAtom(
    currentDetailVehicleDataAtom
  );
  console.log("VehicleResultDetailScreen");
  console.log(currentDetailVehicleData);

  const path = usePathname();
  const params = useSearchParams();
  console.log("params", params);

  console.log("in name Vehicle");
  console.log("path", path);

  if (!currentDetailVehicleData) {
    const searchName = params.searchName as string;

    return (
      <>
        <Stack.Screen options={{ headerTitle: searchName }} />
        <View className="flex-1 items-center bg-neutral-700">
          <VehicleInfo searchName={searchName} />
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ headerTitle: currentDetailVehicleData.name }} />
      <View className="flex-1 items-center bg-neutral-700">
        <VehicleDetails />
      </View>
    </>
  );
};

export default VehicleResultDetailScreen;
