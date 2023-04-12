import { View, TouchableOpacity } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { usePathname, useRouter } from "expo-router";

import categoriesData from "../../assets/data/categoriesData";
import CategoryItem from "~components/CategoryItem";

const SearchSelectCategory: React.FC = () => {
  const pathName = usePathname();
  console.log("CategoriesScreen");
  console.log(pathName);
  const router = useRouter();

  const onSetSearchType = (name: string) => {
    const lowerName = name.toLowerCase();
    console.log("lowername", lowerName);
    router.replace({
      pathname: "/home/search/SearchInputWithType",
      params: {
        category: lowerName,
      },
    });
  };

  return (
    <View className="flex-1 bg-neutral-700">
      <FlatGrid
        itemDimension={150}
        data={categoriesData}
        maxItemsPerRow={3}
        className="mt-5 flex-1"
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              onSetSearchType(item.name);
            }}
          >
            <CategoryItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchSelectCategory;
