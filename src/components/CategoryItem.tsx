import { View, Image, Text, ImageSourcePropType } from "react-native";
import React from "react";

type CategoryItemProps = {
  item: {
    name: string;
    pic: ImageSourcePropType;
  };
};

const CategoryItem: React.FC<CategoryItemProps> = (props) => {
  console.log("CategoryItem");
  console.log(props);

  return (
    <View className="relative items-center justify-end rounded-md h-44">
      <Image className="w-full h-full " source={props.item.pic} />
      <View className=" absolute bottom-3.5 flex-row">
        <View
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4) " }}
          className="bg-black flex-row flex-1 justify-center"
        >
          <Text className="font-semibold text-[16px] text-white">
            {props.item.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CategoryItem;
