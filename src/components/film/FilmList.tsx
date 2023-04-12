import { View, FlatList, Alert } from "react-native";
import { useRouter } from "expo-router";

import { useSearchFilm } from "~hooks/Hooks";
import FilmListItem from "./FilmListItem";
import Loading from "~components/Loading";

type FilmListProps = {
  searchName: string;
};

const FilmList: React.FC<FilmListProps> = (props) => {
  console.log(props);
  const router = useRouter();
  const { data, isFetching, isLoading } = useSearchFilm(props.searchName);

  if (isFetching || isLoading) {
    console.log("isFetching");
    return <Loading />;
  }

  const createTwoButtonAlert = () => {
    Alert.alert("Error", "Please enter a valid name.", [
      { text: "OK", onPress: () => router.back, style: "cancel" },
    ]);
    return null;
  };
  if (data.length === 0) {
    return createTwoButtonAlert();
  }

  console.log(data);
  return (
    <View className="flex-row flex-1 my-4 mx-4">
      <FlatList
        data={data.results}
        renderItem={({ item, index }) => <FilmListItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default FilmList;
