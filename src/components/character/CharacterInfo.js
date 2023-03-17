import { View } from "react-native";
import CharacterDetails from "./CharacterDetails";
import CharacterRelatedFilm from "./CharacterRelatedFilm";

export default function CharacterInfo(props) {
  console.log(props);
  console.log(props.item);
  console.log("props.item.film");
  console.log(props.item[0].films);

  return (
    <View>
      <View className="flex-2 my-2.5 min-h-fit flex-row ">
        <CharacterDetails data={props.item} />
      </View>
      <View className="flex-1 min-w-[80%] max-w-[80%]">
        <CharacterRelatedFilm films={props.item[0].films} />
      </View>
    </View>
  );
}
