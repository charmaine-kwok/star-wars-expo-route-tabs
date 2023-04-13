import { useAtom } from "jotai";

import { currentDetailSpeciesDataAtom } from "~atoms/currentData/speciesData";
import SpeciesDetails from "./SpeciesDetails";
import Loading from "~components/Loading";
import { useSearchSpecies } from "~hooks/Hooks";

type SpeciesInfoProps = {
  searchName: string;
};

const SpeciesInfo: React.FC<SpeciesInfoProps> = (props) => {
  console.log("in Species info");
  const [currentDetailSpeciesData, setCurrentDetailSpeciesData] = useAtom(
    currentDetailSpeciesDataAtom
  );
  const { data, isFetching, isLoading } = useSearchSpecies(props.searchName);
  if (isFetching || isLoading) {
    console.log("isFetching");
    return <Loading />;
  }

  // setCurrentDetailSpeciesData(data.results[0]);
  console.log(currentDetailSpeciesData);
  return <SpeciesDetails data={data.results[0]} />;
};

export default SpeciesInfo;
