import { StyleSheet, View, Image, Pressable } from "react-native";
import { Text } from "@rneui/themed";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { currentDetailFilmDataAtom } from "~atoms/currentData/filmData";

type CharacterRelatedFilmContentItemProps = {
  item: { filmId: string; filmTitle: string };
};

const CharacterRelatedFilmContentItem: React.FC<
  CharacterRelatedFilmContentItemProps
> = (props) => {
  const router = useRouter();

  const [currentDetailFilmData, setCurrentDetailFilmData] = useAtom(
    currentDetailFilmDataAtom
  );

  console.log("CharacterRelatedFilmContentItemProps");
  console.log(props);
  return (
    <Pressable
      onPress={() => {
        setCurrentDetailFilmData(null);
        router.push({
          pathname: `/home/films/${props.item.filmTitle}`,
          params: {
            searchName: props.item.filmTitle,
          },
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
        <View className="justify-center">
          <Text style={styles.name}>{props.item.filmTitle}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
  },
});

export default CharacterRelatedFilmContentItem;
