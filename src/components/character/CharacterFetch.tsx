import { View } from "react-native";

import { useSearchCharacter } from "~hooks/Hooks";
import CharacterDetails from "./CharacterDetails";
import Loading from "~components/Loading";

type CharacterFetchProprs = {
  searchName: string;
};

const CharacterFetch: React.FC<CharacterFetchProprs> = (props) => {
  console.log("In character fetch");
  console.log(props);
  const { data, isFetching, isLoading } = useSearchCharacter(props.searchName);

  if (isFetching || isLoading) {
    console.log("isFetching");
    return <Loading />;
  }
  console.log("data.results");
  console.log(data);

  return (
    <View className="my-2.5 flex-row ">
      <CharacterDetails data={data.results[0]} />
    </View>
  );
};

export default CharacterFetch;
