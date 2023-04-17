import { Text, View, FlatList, Image, Alert } from "react-native";
import { useAtom } from "jotai";

import {
  currentDetailVehicleDataAtom,
  VehicleDataProps,
} from "~atoms/currentData/vehicleData";

type VehicleDetailsProps = {
  data?: VehicleDataProps;
};

const VehicleDetails: React.FC<VehicleDetailsProps> = (props) => {
  console.log("in Vehicle details component");
  console.log(props);
  const [currentDetailVehicleData] = useAtom(currentDetailVehicleDataAtom);
  console.log(currentDetailVehicleData);
  return (
    <View className="flex-1 my-2.5 min-h-full flex-row bg-neutral-700">
      <FlatList
        data={
          currentDetailVehicleData ? [currentDetailVehicleData] : [props.data]
        }
        renderItem={({ item, index }) => (
          <View>
            <Text className=" my-2 text-center font-semibold italic text-2xl text-white">
              {item.name}
            </Text>

            <View className="my-3 justify-center items-center">
              <Image
                className="object-cover mb-2.5 h-[300px] w-[200px]"
                source={{
                  uri: `https://starwars-visualguide.com/assets/img/vehicles/${
                    item.url.split("/").slice(-2, -1)[0]
                  }.jpg`,
                }}
              />
            </View>

            <View>
              <Text className="ml-16 text-lg text-white mr-2">
                Name: {item.name}
                {"\n"}
                Model: {item.model}
                {"\n"}
                Manufacturer: {item.manufacturer}
                {"\n"}
                Cost in credits: {item.cost_in_credits}
                {"\n"}
                Length: {item.length}
                {"\n"}
                Max Atmosphering Speed: {item.max_atmosphering_speed}
                {"\n"}
                Crew: {item.crew}
                {"\n"}
                Passangers: {item.passengers}
                {"\n"}
                Cargo Capacity: {item.cargo_capacity}
                {"\n"}
                Consumables: {item.consumables}
                {"\n"}
                Vehicle Class: {item.vehicle_class}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default VehicleDetails;
