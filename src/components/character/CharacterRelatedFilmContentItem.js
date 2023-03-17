import { StyleSheet, View, Image, Pressable } from "react-native";
import { Text } from "@rneui/themed";

export default function CharacterRelatedFilmContentItem(props) {
  return (
    <Pressable
      onPress={() => {
        props.navigate.navigate("FilmDetails", {
          name: props.item.filmTitle,
          // item: props.item,
        });
      }}
    >
      <View className="flex-row mb-1.5">
        <Image
          className="rounded-full h-14 w-14 mr-2.5"
          resizeMode="cover"
          source={{
            uri: `https://starwars-visualguide.com/assets/img/films/${props.item.filmId}.jpg`,
          }}
        />
        <View className="justify-center ">
          <Text style={styles.name}>{props.item.filmTitle}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
  },
});
