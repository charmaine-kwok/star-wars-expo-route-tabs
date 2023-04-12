import { View, Text } from "react-native";
import { useAtom } from "jotai";

import CharacterList from "~components/character/CharacterList";
import { favouriteCharacterListAtom } from "~atoms/favourite";

const likedCharacterList: React.FC = () => {
  const [favouriteCharacterList, setFavouriteCharacterList] = useAtom(
    favouriteCharacterListAtom
  );

  return (
    <View className="flex-1 bg-neutral-700">
      <CharacterList fav={favouriteCharacterList} page={"1"}></CharacterList>
    </View>
  );
};
export default likedCharacterList;
