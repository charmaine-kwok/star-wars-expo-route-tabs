import { Text, View, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { AntDesign } from "@expo/vector-icons";

import { CharacterData } from "~hooks/Hooks";
import { currentDetailCharacterDataAtom } from "~atoms/currentData/characterData";
import { favouriteCharacterListAtom } from "~atoms/favourite";

type CharacterListItemProps = {
  item: CharacterData;
};

const CharacterListItem: React.FC<CharacterListItemProps> = (props) => {
  const [currentDetailCharacterData, setCurrentDetailCharacterData] = useAtom(
    currentDetailCharacterDataAtom
  );
  const [favouriteCharacterList, setFavouriteCharacterList] = useAtom(
    favouriteCharacterListAtom
  );

  const router = useRouter();

  console.log("CharacterListItem");
  console.log(props.item);
  console.log("favouriteCharacterList", favouriteCharacterList);
  const names = favouriteCharacterList.map((item) => item.name);

  return (
    <Pressable
      onPress={() => {
        setCurrentDetailCharacterData(props.item);
        router.replace({
          pathname: `/home/characters/${props.item.name}`,
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
        <Pressable
          className="ml-3"
          onPress={() => {
            console.log(props.item.name);
            console.log("fav", props.item.favourite);
            if (!props.item.favourite) {
              props.item.favourite = !props.item.favourite;
              setFavouriteCharacterList((favouriteCharacterList) => [
                ...favouriteCharacterList,
                props.item,
              ]);

              console.log("favouriteCharacterList", favouriteCharacterList);
            } else {
              props.item.favourite = !props.item.favourite;

              setFavouriteCharacterList(
                favouriteCharacterList.filter(
                  (item) => item.name !== props.item.name
                )
              );
            }
          }}
        >
          {props.item.favourite || names.includes(props.item.name) ? (
            <AntDesign name="heart" size={24} color="red" />
          ) : (
            <AntDesign name="hearto" size={24} color="red" />
          )}
        </Pressable>
      </View>
    </Pressable>
  );
};

export default CharacterListItem;
