import { FlatList } from "react-native";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

import Loading from "~components/Loading";
import CharacterRelatedFilmContentItem from "./CharacterRelatedFilmContentItem";

type CharacterRelatedFilmContentProps = {
  filmsIdArr: string[];
};

const CharacterRelatedFilmContent: React.FC<
  CharacterRelatedFilmContentProps
> = (props) => {
  console.log("CharacterRelatedFilmContent");
  console.log(props);

  const results = useQueries({
    queries: props.filmsIdArr.map((item) => ({
      queryKey: ["getSearchFilmID", item],
      queryFn: async (item: any) => {
        const filmId = item.queryKey[1];
        const SWapi = `https://swapi.dev/api/films/${filmId}`;
        console.log(SWapi);

        const response = await axios.get(SWapi);
        console.log(response.data);
        return response.data;
      },
      staleTime: Infinity,
    })),
  });

  if (
    results[results.length - 1].isLoading ||
    results[results.length - 1].isFetching ||
    results[0].isLoading ||
    results[0].isFetching
  ) {
    return <Loading />;
  }

  console.log("results", results);

  const titlesArr = results.map((item) => item.data.title);
  const combined = props.filmsIdArr.map(function (v, k, a) {
    return { filmId: v, filmTitle: titlesArr[k] };
  });

  console.log("combined", combined);

  const content = (
    <FlatList
      data={combined}
      renderItem={({ item, index }) => (
        <CharacterRelatedFilmContentItem item={item} />
      )}
      keyExtractor={(item, index) => item.filmId}
    />
  );

  return content;
};

export default CharacterRelatedFilmContent;
