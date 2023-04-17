import { useAtom } from "jotai";

import { currentDetailVehicleDataAtom } from "~atoms/currentData/vehicleData";
import VehicleDetails from "./VehicleDetails";
import Loading from "~components/Loading";
import { useSearchVehicles } from "~hooks/Hooks";

type VehicleInfoProps = {
  searchName: string;
};

const VehicleInfo: React.FC<VehicleInfoProps> = (props) => {
  console.log("in Vehicle info");
  const [currentDetailVehicleData, setCurrentDetailVehicleData] = useAtom(
    currentDetailVehicleDataAtom
  );
  const { data, isFetching, isLoading } = useSearchVehicles(props.searchName);
  if (isFetching || isLoading) {
    console.log("isFetching");
    return <Loading />;
  }

  // setCurrentDetailVehicleData(data.results[0]);
  console.log(currentDetailVehicleData);
  return <VehicleDetails data={data.results[0]} />;
};

export default VehicleInfo;
