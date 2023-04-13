import { atom } from "jotai";

export type SpeciesDataProps = {
  name: string;
  classification: string;
  designation: string;
  average_height: number;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: number;
  url: string;
};

export const currentDetailSpeciesDataAtom = atom<SpeciesDataProps>({
  name: "",
  classification: "",
  designation: "",
  average_height: 0,
  skin_colors: "",
  hair_colors: "",
  eye_colors: "",
  average_lifespan: 0,
  url: "",
});
