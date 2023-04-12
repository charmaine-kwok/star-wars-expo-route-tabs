import { View, Alert, Button, FlatList, RefreshControl } from "react-native";
import { useRouter } from "expo-router";
import { useState, useCallback } from "react";

import CharacterListItem from "./CharacterListItem";
import { useSearchCharacter } from "~hooks/Hooks";
import Loading from "~components/Loading";
import { CharacterData } from "~hooks/Hooks";

type CharacterListProps = {
  searchName?: string;
  page: string;
  fav?: CharacterData[];
};

const CharacterList: React.FC<CharacterListProps> = (props) => {
  const router = useRouter();
  console.log("in Character List");

  console.log(props);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 4000);
  }, []);

  const { data, isFetching, isLoading } = useSearchCharacter(
    props.searchName,
    parseInt(props.page)
  );

  if (isFetching || isLoading) {
    console.log("isFetching");

    return <Loading />;
  }
  console.log(data);

  const createTwoButtonAlert = () => {
    Alert.alert("Error", "Please enter a valid name.", [
      { text: "OK", onPress: () => router.back, style: "cancel" },
    ]);
    return null;
  };
  if (data.length === 0) {
    return createTwoButtonAlert();
  }

  return (
    <View className="flex-row flex-1 my-4 mx-4">
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
        ListFooterComponent={() => (
          <View className="flex-row justify-between space-x-16 mb-16 ">
            {data.previous ? (
              <Button
                color="white"
                onPress={() => {
                  router.replace({
                    pathname: "/home/characters/resultsList",
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
                  router.replace({
                    pathname: "/home/characters/resultsList",
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
        data={props.fav ? props.fav : data.results}
        renderItem={({ item, index }) => <CharacterListItem item={item} />}
        keyExtractor={(item, index) => item.name}
      />
    </View>
  );
};

export default CharacterList;
