import { View, StyleSheet, FlatList, Text, Alert } from "react-native";
import { useSearchFilm } from "../../api/Hooks";

import FilmListItem from "./FilmListItem";

export default function FilmList(props) {
  ({ data, isFetching, isLoading } = useSearchFilm(props.name));

  if (isFetching || isLoading) {
    console.log("isFetching");
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }
  const createTwoButtonAlert = () =>
    Alert.alert("Error", "Please enter a valid name.", [
      { text: "OK", onPress: () => props.navigation.goBack(), style: "cancel" },
    ]);
  if (data.results.length === 0) {
    return createTwoButtonAlert();
  }
  if (data.next) {
    console.log(data.next);
  }
  return (
    <View style={styles.list}>
      <FlatList
        data={data.results}
        renderItem={({ item, index }) => (
          <FilmListItem item={item} navigation={props.navigation} />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
    marginHorizontal: 15,
    minHeight: 100,
    flexDirection: "row",
  },
});
