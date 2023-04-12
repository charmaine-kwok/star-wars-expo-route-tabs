import { Text, View, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { currentDetailFilmDataAtom } from "../../atoms/currentData/filmData";
import { useAtom } from "jotai";
import { FilmDataProps } from "../../atoms/currentData/filmData";

type FilmListItemProps = {
  item: FilmDataProps;
};

const FilmListItem: React.FC<FilmListItemProps> = (props) => {
  const router = useRouter();
  const [currentDetailFilmData, setCurrentDetailFilmData] = useAtom(
    currentDetailFilmDataAtom
  );

  console.log("FilmListItem");
  console.log(props.item);
  return (
    <Pressable
      onPress={() => {
        setCurrentDetailFilmData(props.item);

        router.replace({
          pathname: `/home/films/${props.item.title}`,
        });
      }}
    >
      <View className=" flex-row text-white items-center border-white border rounded-2xl my-3">
        <View className="my-3 mx-5 justify-center items-center rounded-full">
          <Image
            className="w-[80px] h-[80px] rounded-full object-fill"
            source={{
              uri: `https://starwars-visualguide.com/assets/img/films/${
                props.item.url.split("/").slice(-2, -1)[0]
              }.jpg`,
            }}
          />
        </View>
        <View className="w-1/2">
          <Text className=" font-semibold italic text-xl text-white">
            {props.item.title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default FilmListItem;
