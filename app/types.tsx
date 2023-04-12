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
