import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// export const useGetWorkOrder = (id?: string) => {
//   return useQuery(
//     ["workorder-by-id", id],
//     async () => {
//       const resp = (await httpClient.get) < WorkOrder > `/api/workorders/${id}`;
//       return resp.data;
//     },
//     { enabled: !!id }
//   );
// };

export type CharacterData = {
  name: string;
  url: string;
  gender: string;
  height: string;
  birth_year: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  films: string[];
  favourite: boolean;
};

// export const useCharacterById = (id) => {
//   return useQuery(["character-by-id", id], _getSWApi.bind(this, id), {
//     enabled: !!id,
//   });
// };

export const useCharacterById = (id: number) => {
  return useQuery(["character-by-id", id], async () => {
    const { data } = await axios.get<CharacterData>(
      `https://swapi.dev/api/people/${id}`
    );
    console.log("response.data", data);

    return {
      name: data.name,
      url: data.url,
      gender: data.gender,
      height: data.height,
      birth_year: data.birth_year,
      eye_color: data.eye_color,
      hair_color: data.hair_color,
      skin_color: data.skin_color,
      films: data.films,
    } as CharacterData;
  });
};

// let pageNum = 1;
// const offset = 10;
// Search by character name
export const useSearchCharacter = (name: string, pageNum: number = 1) => {
  // let pageNum = 1;
  return useQuery(["getSearchCharacter", { name, pageNum }], async () => {
    const { data } = await axios.get(
      `https://swapi.dev/api/people/?search=${name}&page=${pageNum}`
    );

    return data;
  });
};

// Search by film name
export const useSearchFilm = (name: string) => {
  return useQuery(["getSearchCharacter", name], async () => {
    const SWapi = `https://swapi.dev/api/films/?search=${name}`;
    console.log(SWapi);

    const response = await axios.get(SWapi);
    return response.data;
  });
};

// Search by film id
export const getSearchFilmById = async (item) => {
  const SWapi = `https://swapi.dev/api/films/${item.queryKey[1]}`;
  console.log(SWapi);

  const response = await axios.get(SWapi);
  return response.data;
};

// Search by species name
export const useSearchSpecies = (name) => {
  return useQuery(["getSearchSpecies", name], async () => {
    const SWapi = `https://swapi.dev/api/species/?search=${name}`;
    console.log(SWapi);

    const response = await axios.get(SWapi);
    console.log("response.data", response.data);
    return response.data;
  });
};
