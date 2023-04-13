import { useSearchParams } from "expo-router";

import CategorySearchForm from "~components/forms/CategorySearchForm";
import {
  useSearchFilm,
  useSearchCharacter,
  useSearchSpecies,
} from "~hooks/Hooks";
import { StarWarAPICategory, SearchCategroyAction } from "../../types";

const searchCategroyActions: {
  [key in StarWarAPICategory]: SearchCategroyAction;
} = {
  characters: {
    searchType: "name",
    queryFn: useSearchCharacter,
    placeholder: "Luke Skywalker",
  },
  films: {
    searchType: "title",
    queryFn: useSearchFilm,
    placeholder: "A New Hope",
  },

  species: {
    searchType: "name",
    queryFn: useSearchSpecies,
    placeholder: "Human",
  },
  starships: {
    searchType: "name",
    queryFn: useSearchCharacter,
    placeholder: "Death Star",
  },
  vehicles: {
    searchType: "name",
    queryFn: useSearchCharacter,
    placeholder: "Sand Crawler",
  },
  planets: {
    searchType: "name",
    queryFn: useSearchCharacter,
    placeholder: "Alderaan",
  },
};

const SearchInputWithType: React.FC = () => {
  const parmas = useSearchParams();
  const category = parmas.category as string;
  console.log("SearchInput");

  const action = searchCategroyActions[category.toLowerCase()];
  console.log(action);

  return <CategorySearchForm {...action} category={category} />;
};

export default SearchInputWithType;
