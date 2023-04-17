import { atom } from "jotai";

export type PlanetDataProps = {
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  population: number;
  url: string;
};

export const currentDetailPlanetDataAtom = atom<PlanetDataProps>({
  name: "",
  rotation_period: 0,
  orbital_period: 0,
  diameter: 0,
  climate: "",
  gravity: "",
  terrain: "",
  population: 0,
  url: "",
});
