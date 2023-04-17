import { Text, View, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";

import {
  currentDetailPlanetDataAtom,
  PlanetDataProps,
} from "~atoms/currentData/planetData";

type PlanetListItemProps = {
  item: PlanetDataProps;
};

const PlanetListItem: React.FC<PlanetListItemProps> = (props) => {
  const router = useRouter();
  const [currentDetailPlanetData, setCurrentDetailPlanetData] = useAtom(
    currentDetailPlanetDataAtom
  );

  console.log("PlanetListItem");
  console.log(props.item);
  return (
    <Pressable
      onPress={() => {
        setCurrentDetailPlanetData(props.item);

        router.push({
          pathname: `/home/planets/${props.item.name}`,
        });
      }}
    >
      <View className=" flex-row text-white items-center border-white border rounded-2xl my-3">
        <View className="my-3 mx-5 justify-center items-center rounded-full">
          <Image
            className="w-[80px] h-[80px] rounded-full object-fill"
            source={{
              uri: `https://starwars-visualguide.com/assets/img/planets/${
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

export default PlanetListItem;
