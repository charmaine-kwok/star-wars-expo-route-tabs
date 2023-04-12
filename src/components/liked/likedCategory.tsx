import { Pressable, View, Text } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

type LikedCategoryProps = {
  pathname: string;
  category: string;
  categoryAtom: any[];
};

const LikedCategory: React.FC<LikedCategoryProps> = (props) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() =>
        router.replace({
          pathname: props.pathname,
        })
      }
      className="flex-row my-4"
    >
      <View>
        <LinearGradient
          className="flex-3 w-[100px] h-[100px] ml-4 items-center justify-center"
          // Background Linear Gradient
          colors={["#A219FF", "#C673FF"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
        >
          <AntDesign name="heart" size={32} color="white" />
        </LinearGradient>
      </View>
      <View className="flex-1 mt-4 ml-4 ">
        <Text className=" text-xl text-white">
          Liked {props.category} {"\n"} · {props.categoryAtom.length}{" "}
          {props.category}
        </Text>
      </View>
    </Pressable>
  );
};

export default LikedCategory;
