import { Text, View, StyleSheet, FlatList, Image, Alert } from "react-native";
import { useState, useCallback } from "react";
import ReadMore from "react-native-read-more-text";
import { useAtom } from "jotai";
import YoutubePlayer from "react-native-youtube-iframe";

import { currentDetailFilmDataAtom } from "~atoms/currentData/filmData";
import { StarWarFilms, trailerLink } from "app/types";

const filmTrailer: {
  [key in StarWarFilms]: trailerLink;
} = {
  "A New Hope": "vZ734NWnAHA",
  "The Empire Strikes Back": "JNwNXF9Y6kY",
  "Return of the Jedi": "7L8p7_SLzvU",
  "The Phantom Menace": "bD7bpG-zDJQ",
  "Attack of the Clones": "gYbW1F_c9eM",
  "Revenge of the Sith": "5UnjrG_N8hU",
};

type FilmDetailsProps = {
  data?: any;
};

const FilmDetails: React.FC<FilmDetailsProps> = (props) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  console.log("in film details component");
  console.log(props);
  const [currentDetailFilmData] = useAtom(currentDetailFilmDataAtom);
  console.log(currentDetailFilmData);
  return (
    <View className="flex-1 my-2.5 min-h-full flex-row bg-neutral-700">
      <FlatList
        data={currentDetailFilmData ? [currentDetailFilmData] : [props.data]}
        renderItem={({ item, index }) => (
          <View>
            <Text className=" my-2 text-center font-semibold italic text-2xl text-white">
              {item.title}
            </Text>

            <View className="my-3 justify-center items-center">
              <Image
                className="object-cover mb-2.5 h-[300px] w-[200px]"
                source={{
                  uri: `https://starwars-visualguide.com/assets/img/films/${
                    item.url.split("/").slice(-2, -1)[0]
                  }.jpg`,
                }}
              />
            </View>
            <View className="mx-5 mb-4">
              <YoutubePlayer
                height={250}
                play={playing}
                videoId={filmTrailer[item.title]}
                onChangeState={onStateChange}
              />
            </View>
            <View>
              <Text className="ml-16 text-lg text-white mr-2">
                Director: {item.director}
                {"\n"}
                Release Date: {item.release_date}
                {"\n"}
                Producers: {item.producer}
              </Text>

              <View style={styles.desc}>
                <ReadMore
                  numberOfLines={7}
                  renderTruncatedFooter={(handlePress) => {
                    return (
                      <Text
                        className="text-[#60a5fa] mt-4 mb-16 font-bold"
                        onPress={handlePress}
                      >
                        Read more
                      </Text>
                    );
                  }}
                  renderRevealedFooter={(handlePress) => {
                    return (
                      <Text
                        className="text-[#60a5fa] mt-4 mb-16 font-bold"
                        onPress={handlePress}
                      >
                        Show less
                      </Text>
                    );
                  }}
                >
                  <Text
                    style={styles.desc}
                    className="ml-16 mx-5 italic text-white"
                  >
                    {"\n"}Opening Crawl: {"\n"}
                    {"\n"}
                    {item.opening_crawl}
                  </Text>
                </ReadMore>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  desc: {
    marginLeft: 60,
    fontSize: 18,
  },
});

export default FilmDetails;
