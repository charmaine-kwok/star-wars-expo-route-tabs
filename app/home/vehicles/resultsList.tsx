import { View } from "react-native";
import { useSearchParams, usePathname } from "expo-router";

import VehicleList from "~components/vehicle/VehicleList";

const VehicleResultListScreen: React.FC = () => {
  const params = useSearchParams();
  const path = usePathname();
  console.log("in result Screen");
  console.log(params);
  console.log("path", path);

  // const category = params.category as string;
  const searchName = params.searchName as string;
  return (
    <>
      {/* <Stack.Screen options={{ headerTitle: category }} /> */}
      <View className="flex-1 items-center bg-neutral-700">
        <VehicleList searchName={searchName} />
      </View>
    </>
  );
};

export default VehicleResultListScreen;
