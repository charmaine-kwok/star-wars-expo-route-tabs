import { atom } from "jotai";

import { CharacterData } from "../../hooks/Hooks";

export const currentDetailCharacterDataAtom = atom<CharacterData>({
  name: "",
  url: "",
  gender: "",
  height: "",
  birth_year: "",
  eye_color: "",
  hair_color: "",
  skin_color: "",
  films: [""],
});
