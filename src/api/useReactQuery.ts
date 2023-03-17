import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchCharacter } from "./Hooks";

export type QueryResponse = {
  [key: string]: string;
};

const getStuff = async (
  key: string,
  searchQuery: string,
  page: number
): Promise<QueryResponse> => {
  const { data } = await axios.get(
    `https://fetchurl.com?query=${query}&page=${page}`
  );

  return data;
};

// export default function useReactQuery(name: string, pageNum: string) {
//   return useQuery<QueryResponse, Error>(
//     ["query", name, pageNum],
//     useSearchCharacter,
//     {
//       enabled: name, // If we have searchQuery, then enable the query on render
//     }
//   );
// }
