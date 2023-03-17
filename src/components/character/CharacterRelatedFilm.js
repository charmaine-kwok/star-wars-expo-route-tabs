import { View } from "react-native";
import { Card } from "@rneui/themed";
import CharacterRelatedFilmContent from "./CharacterRelatedFilmContent";

export default function CharacterRelatedFilm(props) {
  const films = props.films;
  console.log(films);
  const filmsIdArr = films.map((item) => item.split("/").slice(-2, -1)[0]);
  console.log(filmsIdArr);

  return (
    <View>
      <Card>
        <Card.Title>Related Films</Card.Title>
        <Card.Divider />
        <CharacterRelatedFilmContent
          filmsIdArr={filmsIdArr}
          navigate={props.navigate}
        />
      </Card>
    </View>
  );
}
