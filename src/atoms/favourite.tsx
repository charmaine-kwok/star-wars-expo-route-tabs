import { atom } from "jotai";
import { CharacterData } from "~hooks/Hooks";

export const favouriteCharacterListAtom = atom<CharacterData[]>([]);
