import { atom } from "jotai";

export type FilmDataProps = {
  characters: string[];
  director: string;
  producer: string;
  episode_id: number;
  opening_crawl: string;
  release_date: string;
  title: string;
  url: string;
};

export const currentDetailFilmDataAtom = atom<FilmDataProps>({
  characters: [""],
  director: "",
  producer: "",
  episode_id: 0,
  opening_crawl: "",
  release_date: "",
  title: "",
  url: "",
});
