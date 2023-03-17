import { View, Text } from "react-native";

import FilmDetails from "../film/FilmDetails";
import { useSearchFilm } from "../../api/Hooks";

export default function FilmInfo(props) {
  ({ data, isFetching, isLoading } = useSearchFilm(props.name));
  if (isFetching || isLoading) {
    console.log("isFetching");
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }
  console.log(data);
  console.log(data.results);

  return (
    <View className="flex-1 my-2.5 min-h-full flex-row">
      <FilmDetails item={data.results} name={data.results[0].title} />
    </View>
  );
}
