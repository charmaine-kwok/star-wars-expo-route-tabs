import { useAtom } from "jotai";

import { currentDetailFilmDataAtom } from "~atoms/currentData/filmData";
import FilmDetails from "./FilmDetails";
import Loading from "~components/Loading";
import { useSearchFilm } from "~hooks/Hooks";

type FilmInfoProps = {
  searchName: string;
};

const FilmInfo: React.FC<FilmInfoProps> = (props) => {
  console.log("in film info");
  const [currentDetailFilmData, setCurrentDetailFilmData] = useAtom(
    currentDetailFilmDataAtom
  );
  const { data, isFetching, isLoading } = useSearchFilm(props.searchName);
  if (isFetching || isLoading) {
    console.log("isFetching");
    return <Loading />;
  }

  // setCurrentDetailFilmData(data.results[0]);
  console.log(currentDetailFilmData);
  return <FilmDetails data={data.results[0]} />;
};

export default FilmInfo;
