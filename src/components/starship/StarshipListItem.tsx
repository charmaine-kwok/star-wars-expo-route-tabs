import { Text, View, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";

import {
  currentDetailStarshipDataAtom,
  StarshipDataProps,
} from "~atoms/currentData/starshipData";

type StarshipListItemProps = {
  item: StarshipDataProps;
};

const StarshipListItem: React.FC<StarshipListItemProps> = (props) => {
  const router = useRouter();
  const [currentDetailStarshipData, setCurrentDetailStarshipData] = useAtom(
    currentDetailStarshipDataAtom
  );

  console.log("StarshipListItem");
  console.log(props.item);
  return (
    <Pressable
      onPress={() => {
        setCurrentDetailStarshipData(props.item);

        router.push({
          pathname: `/home/starships/${props.item.name}`,
        });
      }}
    >
      <View className=" flex-row text-white items-center border-white border rounded-2xl my-3">
        <View className="my-3 mx-5 justify-center items-center rounded-full">
          <Image
            className="w-[80px] h-[80px] rounded-full object-fill"
            source={{
              uri: `https://starwars-visualguide.com/assets/img/starships/${
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

export default StarshipListItem;
