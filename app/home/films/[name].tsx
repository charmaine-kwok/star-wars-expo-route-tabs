import { View } from "react-native";
import { useSearchParams, Stack, usePathname } from "expo-router";
import { useAtom } from "jotai";
import { currentDetailFilmDataAtom } from "~atoms/currentData/filmData";
import FilmDetails from "~components/film/FilmDetails";
import FilmInfo from "~components/film/FilmInfo";

const FilmResultDetailScreen: React.FC = () => {
  const [currentDetailFilmData, setCurrentDetailFilmData] = useAtom(
    currentDetailFilmDataAtom
  );
  console.log("FilmResultDetailScreen");
  console.log(currentDetailFilmData);

  const path = usePathname();
  const params = useSearchParams();
  console.log("params", params);

  console.log("in name film");
  console.log("path", path);

  const searchName = params.searchName as string;

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: currentDetailFilmData
            ? currentDetailFilmData.title
            : searchName,
        }}
      />
      <View className="flex-1 items-center bg-neutral-700">
        {currentDetailFilmData ? (
          <FilmDetails />
        ) : (
          <FilmInfo searchName={searchName} />
        )}
      </View>
    </>
  );
};

export default FilmResultDetailScreen;
