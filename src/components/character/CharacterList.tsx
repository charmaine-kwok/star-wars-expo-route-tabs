import { View, StyleSheet, Text, Alert, Button, FlatList } from "react-native";
import { useRouter } from "expo-router";

import CharacterListItem from "./CharacterListItem";
import { useSearchCharacter } from "../../api/Hooks";

type CharacterListProps = {
  searchName: string;
  page: string;
};

const CharacterList: React.FC<CharacterListProps> = (props) => {
  const router = useRouter();
  console.log(props);
  console.log("in Character List");
  const { data, isFetching, isLoading } = useSearchCharacter(
    props.searchName,
    parseInt(props.page)
  );

  if (isFetching || isLoading) {
    console.log("isFetching");
    return (
      <Text className="font-bold text-xl text-white italic">Loading...</Text>
    );
  }
  console.log(data);
  const createTwoButtonAlert = () =>
    Alert.alert("Error", "Please enter a valid name.", [
      { text: "OK", onPress: () => router.back, style: "cancel" },
    ]);
  if (data.length === 0) {
    return createTwoButtonAlert();
  }
  if (data.next) {
    console.log(data.next);
  }

  return (
    <>
      <View style={styles.list}>
        <FlatList
          ListFooterComponent={() => (
            <View className="flex-row justify-between space-x-16 mb-16 ">
              {data.previous ? (
                <Button
                  color="white"
                  onPress={() => {
                    router.replace({
                      pathname: "",
                      params: {
                        category: "Characters",
                        searchName: props.searchName,
                        page: parseInt(props.page) - 1,
                      },
                    });
                  }}
                  title="Prev"
                />
              ) : (
                <View />
              )}
              {data.next && (
                <Button
                  color="white"
                  onPress={() => {
                    router.push({
                      pathname: "",
                      params: {
                        category: "Characters",
                        searchName: props.searchName,
                        page: parseInt(props.page) + 1,
                      },
                    });
                  }}
                  title="Next"
                />
              )}
            </View>
          )}
          data={data.results}
          renderItem={({ item, index }) => <CharacterListItem item={item} />}
          keyExtractor={(item, index) => item.name}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
    marginHorizontal: 15,
    minHeight: 100,
    flexDirection: "row",
    flex: 1,
  },
});

export default CharacterList;
