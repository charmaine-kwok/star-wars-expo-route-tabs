import { Text, View, Image, Pressable } from "react-native";

export default function FilmListItem(props) {
  return (
    <Pressable
      onPress={() => {
        props.navigation.navigate("FilmDetails", {
          name: props.item.title,
          item: props.item,
        });
      }}
    >
      <View className=" flex-row text-white items-center border-white border rounded-2xl my-3">
        <View className="my-3 mx-5 justify-center items-center rounded-full">
          <Image
            height={80}
            width={80}
            className="rounded-full object-fill"
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
}
