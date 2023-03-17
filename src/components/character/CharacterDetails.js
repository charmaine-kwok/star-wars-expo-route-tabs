import { Text, View, StyleSheet, FlatList, Image } from "react-native";

const CharacterDetails = (props) => {
  console.log("props");
  console.log(props);
  return (
    <FlatList
      className="min-h-max"
      data={props.data}
      renderItem={({ item, index }) => (
        <View>
          <Text className="my-2 text-center font-semibold italic text-2xl text-white">
            {item.name}
          </Text>
          <View className="my-3 justify-center items-center">
            <Image
              height={200}
              width={200}
              source={{
                uri: `https://starwars-visualguide.com/assets/img/characters/${
                  item.url.split("/").slice(-2, -1)[0]
                }.jpg`,
              }}
            />
          </View>
          <Text style={styles.desc}>Gender: {item.gender} </Text>
          <Text style={styles.desc}>Height: {item.height} </Text>
          <Text style={styles.desc}>Birth Year: {item.birth_year} </Text>
          <Text style={styles.desc}>Eye Color: {item.eye_color} </Text>
          <Text style={styles.desc}>Hair Color: {item.hair_color} </Text>
          <Text style={styles.desc}>Skin Color: {item.skin_color} </Text>
        </View>
      )}
      keyExtractor={(item, index) => index}
    />
  );
};

const styles = StyleSheet.create({
  desc: {
    color: "white",
    textAlign: "left",
    marginLeft: 80,
    fontSize: 18,
  },
});

export default CharacterDetails;
