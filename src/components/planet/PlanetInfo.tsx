import { useAtom } from "jotai";

import { currentDetailPlanetDataAtom } from "~atoms/currentData/planetData";
import PlanetDetails from "./PlanetDetails";
import Loading from "~components/Loading";
import { useSearchPlanets } from "~hooks/Hooks";

type PlanetInfoProps = {
  searchName: string;
};

const PlanetInfo: React.FC<PlanetInfoProps> = (props) => {
  console.log("in Planet info");
  const [currentDetailPlanetData, setCurrentDetailPlanetData] = useAtom(
    currentDetailPlanetDataAtom
  );
  const { data, isFetching, isLoading } = useSearchPlanets(props.searchName);
  if (isFetching || isLoading) {
    console.log("isFetching");
    return <Loading />;
  }

  // setCurrentDetailPlanetData(data.results[0]);
  console.log(currentDetailPlanetData);
  return <PlanetDetails data={data.results[0]} />;
};

export default PlanetInfo;
