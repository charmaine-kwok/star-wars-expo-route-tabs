import { View, FlatList, Alert } from "react-native";
import { useRouter } from "expo-router";

import { useSearchSpecies } from "~hooks/Hooks";
import SpeciesListItem from "./SpeciesListItem";
import Loading from "~components/Loading";

type SpeciesListProps = {
  searchName: string;
};

const SpeciesList: React.FC<SpeciesListProps> = (props) => {
  console.log(props);
  const router = useRouter();
  const { data, isFetching, isLoading } = useSearchSpecies(props.searchName);

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
        renderItem={({ item, index }) => <SpeciesListItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SpeciesList;
