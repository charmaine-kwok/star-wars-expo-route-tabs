import { useSearchParams } from "expo-router";

import CategorySearchForm from "~components/forms/CategorySearchForm";
import {
  useSearchFilm,
  useSearchCharacter,
  useSearchSpecies,
  useSearchStarships,
  useSearchVehicles,
  useSearchPlanets,
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
    queryFn: useSearchStarships,
    placeholder: "Death Star",
  },
  vehicles: {
    searchType: "name",
    queryFn: useSearchVehicles,
    placeholder: "Sand Crawler",
  },
  planets: {
    searchType: "name",
    queryFn: useSearchPlanets,
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
