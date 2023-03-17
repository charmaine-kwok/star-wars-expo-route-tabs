import { ImageSourcePropType } from "react-native";

interface IData {
  name: string;
  pic: ImageSourcePropType;
  placeholder?: string;
}

const categoriesData: IData[] = [
  {
    name: "CHARACTERS",
    pic: require("../categories/character.jpg"),
    placeholder: "Luke Skywalker",
  },
  {
    name: "FILMS",
    pic: require("../categories/films.jpg"),
    placeholder: "A New Hope",
  },
  {
    name: "SPECIES",
    pic: require("../categories/species.jpg"),
    placeholder: "Human",
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
