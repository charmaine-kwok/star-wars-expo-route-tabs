import { View } from "react-native";
import { useSearchParams, usePathname } from "expo-router";

import StarshipList from "~components/starship/StarshipList";

const StarshipResultListScreen: React.FC = () => {
  const params = useSearchParams();
  const path = usePathname();
  console.log("in result Screen");
  console.log(params);
  console.log("path", path);

  const category = params.category as string;
  const searchName = params.searchName as string;
  return (
    <>
      {/* <Stack.Screen options={{ headerTitle: category }} /> */}
      <View className="flex-1 items-center bg-neutral-700">
        <StarshipList searchName={searchName} />
      </View>
    </>
  );
};

export default StarshipResultListScreen;
