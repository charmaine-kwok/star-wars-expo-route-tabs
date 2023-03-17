import { View } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Stack, usePathname } from "expo-router";

import categoriesData from "../../../assets/data/categoriesData";
import CategoryItem from "../../../src/components/CategoryItem";

export default function CategoriesScreen() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <View className="flex-1 bg-neutral-700">
      <FlatGrid
        itemDimension={150}
        data={categoriesData}
        className="mt-5 flex-1"
        renderItem={({ item, index }) => <CategoryItem item={item} />}
      />
    </View>
  );
}
