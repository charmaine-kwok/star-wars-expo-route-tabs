import { atom } from "jotai";

export type StarshipDataProps = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
  length: number;
  max_atmosphering_speed: number;
  crew: number;
  passengers: number;
  cargo_capacity: number;
  consumables: string;
  url: string;
};

export const currentDetailStarshipDataAtom = atom<StarshipDataProps>({
  name: "",
  model: "",
  manufacturer: "",
  cost_in_credits: 0,
  length: 0,
  max_atmosphering_speed: 0,
  crew: 0,
  passengers: 0,
  cargo_capacity: 0,
  consumables: "",
  url: "",
});
