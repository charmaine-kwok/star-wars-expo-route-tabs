import { View } from "react-native";
import { Card } from "@rneui/themed";
import CharacterRelatedFilmContent from "./CharacterRelatedFilmContent";

type CharacterRelatedFilmProps = {
  films: string[];
};

const CharacterRelatedFilm: React.FC<CharacterRelatedFilmProps> = (props) => {
  console.log("CharacterRelatedFilm");
  console.log(props);

  const films = props.films;
  console.log(films);
  const filmsIdArr = films.map((item) => item.split("/").slice(-2, -1)[0]);
  console.log(filmsIdArr);

  return (
    <View className="w-[80%]">
      <Card>
        <Card.Title>Related Films</Card.Title>
        <Card.Divider />
        <CharacterRelatedFilmContent filmsIdArr={filmsIdArr} />
      </Card>
    </View>
  );
};

export default CharacterRelatedFilm;
