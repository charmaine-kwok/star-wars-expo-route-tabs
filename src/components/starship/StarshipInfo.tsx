import { useAtom } from "jotai";

import { currentDetailStarshipDataAtom } from "~atoms/currentData/starshipData";
import StarshipDetails from "./StarshipDetails";
import Loading from "~components/Loading";
import { useSearchStarships } from "~hooks/Hooks";

type StarshipInfoProps = {
  searchName: string;
};

const StarshipInfo: React.FC<StarshipInfoProps> = (props) => {
  console.log("in Starship info");
  const [currentDetailStarshipData, setCurrentDetailStarshipData] = useAtom(
    currentDetailStarshipDataAtom
  );
  const { data, isFetching, isLoading } = useSearchStarships(props.searchName);
  if (isFetching || isLoading) {
    console.log("isFetching");
    return <Loading />;
  }

  // setCurrentDetailStarshipData(data.results[0]);
  console.log(currentDetailStarshipData);
  return <StarshipDetails data={data.results[0]} />;
};

export default StarshipInfo;
