import { Text, View, FlatList, Image, Alert } from "react-native";
import { useAtom } from "jotai";

import {
  currentDetailStarshipDataAtom,
  StarshipDataProps,
} from "~atoms/currentData/starshipData";

type StarshipDetailsProps = {
  data?: StarshipDataProps;
};

const StarshipDetails: React.FC<StarshipDetailsProps> = (props) => {
  console.log("in Starship details component");
  console.log(props);
  const [currentDetailStarshipData] = useAtom(currentDetailStarshipDataAtom);
  console.log(currentDetailStarshipData);
  return (
    <View className="flex-1 my-2.5 min-h-full flex-row bg-neutral-700">
      <FlatList
        data={
          currentDetailStarshipData ? [currentDetailStarshipData] : [props.data]
        }
        renderItem={({ item, index }) => (
          <View>
            <Text className=" my-2 text-center font-semibold italic text-2xl text-white">
              {item.name}
            </Text>

            <View className="my-3 justify-center items-center">
              <Image
                className="object-cover mb-2.5 h-[300px] w-[200px]"
                source={{
                  uri: `https://starwars-visualguide.com/assets/img/starships/${
                    item.url.split("/").slice(-2, -1)[0]
                  }.jpg`,
                }}
              />
            </View>

            <View>
              <Text className="ml-16 text-lg text-white mr-2 mb-8">
                Name: {item.name}
                {"\n"}
                Model: {item.model}
                {"\n"}
                Manufacturer: {item.manufacturer}
                {"\n"}
                Cost in credits: {item.cost_in_credits}
                {"\n"}
                Length: {item.length}
                {"\n"}
                Max Atmosphering Speed: {item.max_atmosphering_speed}
                {"\n"}
                Crew: {item.crew}
                {"\n"}
                Passangers: {item.passengers}
                {"\n"}
                Cargo Capacity: {item.cargo_capacity}
                {"\n"}
                Consumables: {item.consumables}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default StarshipDetails;
