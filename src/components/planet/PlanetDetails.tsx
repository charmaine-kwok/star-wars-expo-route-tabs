import { Text, View, FlatList, Image, Alert } from "react-native";
import { useAtom } from "jotai";

import {
  currentDetailPlanetDataAtom,
  PlanetDataProps,
} from "~atoms/currentData/planetData";

type PlanetDetailsProps = {
  data?: PlanetDataProps;
};

const PlanetDetails: React.FC<PlanetDetailsProps> = (props) => {
  console.log("in Planet details component");
  console.log(props);
  const [currentDetailPlanetData] = useAtom(currentDetailPlanetDataAtom);
  console.log(currentDetailPlanetData);
  return (
    <View className="flex-1 my-2.5 min-h-full flex-row bg-neutral-700">
      <FlatList
        data={
          currentDetailPlanetData ? [currentDetailPlanetData] : [props.data]
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
                  uri: `https://starwars-visualguide.com/assets/img/planets/${
                    item.url.split("/").slice(-2, -1)[0]
                  }.jpg`,
                }}
              />
            </View>

            <View>
              <Text className="ml-16 text-lg text-white mr-2 mb-8">
                Name: {item.name}
                {"\n"}
                Rotation Period: {item.rotation_period}
                {"\n"}
                Orbital Period: {item.orbital_period}
                {"\n"}
                Diameter: {item.diameter}
                {"\n"}
                Climate: {item.climate}
                {"\n"}
                Diameter: {item.diameter}
                {"\n"}
                Terrain: {item.terrain}
                {"\n"}
                Population: {item.population}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default PlanetDetails;
