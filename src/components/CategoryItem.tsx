import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

interface IItem {
  name: string;
  pic: ImageSourcePropType;
  placeholder?: string;
}

type CategoryItemProps = {
  item: IItem;
};

const CategoryItem: React.FC<CategoryItemProps> = (props) => {
  const router = useRouter();
  console.log(props.item.name.toLowerCase());
  const link = `/home/search/${props.item.name.toLowerCase()}`;
  console.log("CategoryItem");

  console.log(props);
  console.log(link);
  return (
    <TouchableOpacity
      onPress={() => {
        router.replace({
          pathname: link,
          params: {
            category: props.item.name,
            placeholder: props.item.placeholder,
          },
        });
      }}
    >
      <View className="relative items-center justify-end rounded-md h-44">
        <Image className="w-full h-full " source={props.item.pic} />
        <View className=" absolute bottom-3.5 flex-row">
          <View
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4) " }}
            className="bg-black  flex-row flex-1 justify-center"
          >
            <Text className="font-semibold text-[16px] text-white">
              {props.item.name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
