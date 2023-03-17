import { Text, View, Image, Pressable } from "react-native";
import { CharacterData } from "../../api/Hooks";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { currentDetailScreenDataAtom } from "../../atoms/currentDetailScreenData";

type CharacterListItemProps = {
  item: CharacterData;
};

const CharacterListItem: React.FC<CharacterListItemProps> = (props) => {
  const [currentDetailScreenData, setCurrentDetailScreenData] = useAtom(
    currentDetailScreenDataAtom
  );
  const router = useRouter();
  console.log("CharacterListItem");

  console.log(props.item);
  // setCurrentDetailScreenData(props.item);

  return (
    <Pressable
      onPress={() => {
        setCurrentDetailScreenData(props.item);
        router.replace({
          pathname: "/characters",
          params: {
            name: props.item.name,
            // item: JSON.stringify(props.item),
          },
        });
      }}
    >
      <View className=" flex-row text-white items-center border-white border rounded-2xl my-3">
        <View className="my-3 mx-5 justify-center items-center rounded-full">
          <Image
            className="w-[80px] h-[80px] rounded-full object-fill"
            source={{
              uri: `https://starwars-visualguide.com/assets/img/characters/${
                props.item.url.split("/").slice(-2, -1)[0]
              }.jpg`,
            }}
          />
        </View>
        <View className="w-1/2">
          <Text className=" font-semibold italic text-xl text-white">
            {props.item.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CharacterListItem;
