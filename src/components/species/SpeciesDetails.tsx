import { Text, View, FlatList, Image, Alert } from "react-native";
import { useAtom } from "jotai";

import { currentDetailSpeciesDataAtom } from "~atoms/currentData/speciesData";

type SpeciesDetailsProps = {
  data?: any;
};

const SpeciesDetails: React.FC<SpeciesDetailsProps> = (props) => {
  console.log("in species details component");
  console.log(props);
  const [currentDetailSpeciesData] = useAtom(currentDetailSpeciesDataAtom);
  console.log(currentDetailSpeciesData);
  return (
    <View className="flex-1 my-2.5 min-h-full flex-row bg-neutral-700">
      <FlatList
        data={
          currentDetailSpeciesData ? [currentDetailSpeciesData] : [props.data]
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
                  uri: `https://starwars-visualguide.com/assets/img/species/${
                    item.url.split("/").slice(-2, -1)[0]
                  }.jpg`,
                }}
              />
            </View>

            <View>
              <Text className="ml-16 text-lg text-white mr-2 mb-8">
                Name: {item.name}
                {"\n"}
                Classification: {item.classification}
                {"\n"}
                Designation: {item.designation}
                {"\n"}
                Average Height: {item.average_height}
                {"\n"}
                Skin Colors: {item.skin_colors}
                {"\n"}
                Hair Colors: {item.hair_colors}
                {"\n"}
                Eye Colors: {item.eye_colors}
                {"\n"}
                Average Lifespan: {item.average_lifespan}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SpeciesDetails;
