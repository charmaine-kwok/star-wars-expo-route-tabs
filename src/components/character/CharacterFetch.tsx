import { View, Text } from "react-native";

import { useSearchCharacter } from "../../api/Hooks";
import CharacterInfo from "./CharacterInfo";

const CharacterFetch = (props) => {
  const { data, isFetching, isLoading } = useSearchCharacter(props.name);

  if (isFetching || isLoading) {
    console.log("isFetching");
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }
  console.log("data.results");
  console.log(data.results);

  return <CharacterInfo name={data.results.name} item={data.results} />;
};

export default CharacterFetch;
