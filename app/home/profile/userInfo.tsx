import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { useAtomValue } from "jotai";

import { favouriteCharacterListAtom } from "~atoms/favourite";
import LikedCategory from "~components/liked/likedCategory";

const ProfileScreen: React.FC = () => {
  const favouriteCharacterList = useAtomValue(favouriteCharacterListAtom);

  console.log("Profile");

  return (
    <View className="flex-1 items-center text-center bg-neutral-700">
      <Text className="my-8 font-bold text-2xl text-white ">Profile:</Text>
      <View className="mb-8">
        <QRCode value="https://swapi.dev" />
      </View>

      <LikedCategory
        pathname={"./likedCharacterList"}
        category={"Characters"}
        categoryAtom={favouriteCharacterList}
      />
    </View>
  );
};

export default ProfileScreen;
