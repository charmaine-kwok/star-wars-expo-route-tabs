import { ImageSourcePropType } from "react-native";

interface IData {
  name: string;
  pic: ImageSourcePropType;
}

const categoriesData: IData[] = [
  {
    name: "CHARACTERS",
    pic: require("../categories/character.jpg"),
  },
  {
    name: "FILMS",
    pic: require("../categories/films.jpg"),
  },
  {
    name: "SPECIES",
    pic: require("../categories/species.jpg"),
  },
  {
    name: "STARSHIPS",
    pic: require("../categories/starships.jpg"),
  },
  {
    name: "VEHICLES",
    pic: require("../categories/vehicles.jpg"),
  },
  {
    name: "PLANETS",
    pic: require("../categories/planets.jpg"),
  },
];

export default categoriesData;
