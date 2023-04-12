import { Text, View, FlatList, Image } from "react-native";
import { CharacterData } from "../../hooks/Hooks";
import CharacterRelatedFilm from "./CharacterRelatedFilm";

type CharacterDetailsProps = {
  data: CharacterData;
};

const CharacterDetails: React.FC<CharacterDetailsProps> = (props) => {
  console.log("props");
  console.log(props);
  return (
    <View className="flex-1 my-2.5 flex-row ">
      <FlatList
        className="min-h-max"
        data={[props.data]}
        ListFooterComponent={() => (
          <View className="flex-1 items-center ">
            <CharacterRelatedFilm films={props.data.films} />
          </View>
        )}
        renderItem={({ item, index }) => (
          <View className="items-center">
            <Text className="my-2 text-center font-semibold italic text-2xl text-white">
              {item.name}
            </Text>
            <View className="my-3">
              <Image
                className="w-[200px] h-[200px]"
                source={{
                  uri: `https://starwars-visualguide.com/assets/img/characters/${
                    item.url.split("/").slice(-2, -1)[0]
                  }.jpg`,
                }}
              />
            </View>

            <Text className="text-white text-[18px]">
              Gender: {item.gender} {"\n"}
              Height: {item.height} {"\n"}
              Birth Year: {item.birth_year}
              {"\n"}
              Eye Color: {item.eye_color} {"\n"}
              Hair Color: {item.hair_color}
              {"\n"}
              Skin Color: {item.skin_color}{" "}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CharacterDetails;
