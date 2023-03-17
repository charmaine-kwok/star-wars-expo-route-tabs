import { FlatList } from "react-native";
import { Text } from "@rneui/themed";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

import CharacterRelatedFilmContentItem from "./CharacterRelatedFilmContentItem";

export default function CharacterRelatedFilmContent(props) {
  const results = useQueries({
    queries: props.filmsIdArr.map((item) => ({
      queryKey: ["getSearchFilmID", item],
      queryFn: async (item) => {
        const filmId = item.queryKey[1];
        const SWapi = `https://swapi.dev/api/films/${filmId}`;
        console.log(SWapi);

        const response = await axios.get(SWapi);
        return response.data;
      },
    })),
  });

  if (
    results[results.length - 1].isLoading ||
    results[results.length - 1].isFetching
  ) {
    return <Text>Loading...</Text>;
  }

  const titlesArr = results.map((item) => item.data.title);

  const combined = props.filmsIdArr.map(function (v, k, a) {
    return { filmId: v, filmTitle: titlesArr[k] };
  });

  console.log(combined);

  const content = (
    <FlatList
      className="max-h-32 min-w-full"
      data={combined}
      renderItem={({ item, index }) => (
        <CharacterRelatedFilmContentItem
          item={item}
          navigate={props.navigate}
        />
      )}
      keyExtractor={(item, index) => item.filmId}
    />
  );

  return <Text>{content}</Text>;
}
