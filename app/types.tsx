export type StarWarAPICategory =
  | "films"
  | "characters"
  | "species"
  | "starships"
  | "vehicles"
  | "planets";

export type SearchCategroyAction = {
  searchType: "title" | "name";
  queryFn: (params: any) => any;
  placeholder: string;
};

export type StarWarFilms =
  | "A New Hope"
  | "The Empire Strikes Back"
  | "Return of the Jedi"
  | "The Phantom Menace"
  | "Attack of the Clones"
  | "Revenge of the Sith";

export type trailerLink =
  | "vZ734NWnAHA"
  | "JNwNXF9Y6kY"
  | "7L8p7_SLzvU"
  | "bD7bpG-zDJQ"
  | "gYbW1F_c9eM"
  | "5UnjrG_N8hU";
