import { Text, View, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";

import {
  currentDetailSpeciesDataAtom,
  SpeciesDataProps,
} from "~atoms/currentData/speciesData";

type SpeciesListItemProps = {
  item: SpeciesDataProps;
};

const SpeciesListItem: React.FC<SpeciesListItemProps> = (props) => {
  const router = useRouter();
  const [currentDetailSpeciesData, setCurrentDetailSpeciesData] = useAtom(
    currentDetailSpeciesDataAtom
  );

  console.log("SpeciesListItem");
  console.log(props.item);
  return (
    <Pressable
      onPress={() => {
        setCurrentDetailSpeciesData(props.item);

        router.push({
          pathname: `/home/species/${props.item.name}`,
        });
      }}
    >
      <View className=" flex-row text-white items-center border-white border rounded-2xl my-3">
        <View className="my-3 mx-5 justify-center items-center rounded-full">
          <Image
            className="w-[80px] h-[80px] rounded-full object-fill"
            source={{
              uri: `https://starwars-visualguide.com/assets/img/species/${
                props.item.url.split("/").slice(-2, -1)[0]
              }.jpg`,
            }}
          />
        </View>
        <View className="w-1/2">
          <Text className=" font-semibold italic text-xl text-white">
            {props.item.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default SpeciesListItem;
