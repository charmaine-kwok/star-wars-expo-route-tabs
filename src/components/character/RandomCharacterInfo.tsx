import { useCharacterById } from "../../api/Hooks";
import { Text, View } from "react-native";
import CharacterDetails from "./CharacterDetails";

type RandomCharacterInfoProps = {
  randomNumber: number;
};

type characterType = {
  name: string;
  url: string;
  gender: string;
  height: string;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
};

const RandomCharacterInfo: React.FC<RandomCharacterInfoProps> = (props) => {
  const { data, isFetching, isLoading } = useCharacterById(props.randomNumber);

  if (isFetching || isLoading) {
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }

  console.log("data", data);

  return (
    <View className="my-2 flex-row">
      <CharacterDetails data={[data]} />
    </View>
  );
};

export default RandomCharacterInfo;
