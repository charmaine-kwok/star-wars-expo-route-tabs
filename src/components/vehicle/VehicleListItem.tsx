import { Text, View, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";

import {
  currentDetailVehicleDataAtom,
  VehicleDataProps,
} from "~atoms/currentData/vehicleData";

type VehicleListItemProps = {
  item: VehicleDataProps;
};

const VehicleListItem: React.FC<VehicleListItemProps> = (props) => {
  const router = useRouter();
  const [currentDetailVehicleData, setCurrentDetailVehicleData] = useAtom(
    currentDetailVehicleDataAtom
  );

  console.log("VehicleListItem");
  console.log(props.item);
  return (
    <Pressable
      onPress={() => {
        setCurrentDetailVehicleData(props.item);

        router.push({
          pathname: `/home/vehicles/${props.item.name}`,
        });
      }}
    >
      <View className=" flex-row text-white items-center border-white border rounded-2xl my-3">
        <View className="my-3 mx-5 justify-center items-center rounded-full">
          <Image
            className="w-[80px] h-[80px] rounded-full object-fill"
            source={{
              uri: `https://starwars-visualguide.com/assets/img/vehicles/${
                props.item.url.split("/").slice(-2, -1)[0]
              }.jpg`,
            }}
          />
        </View>
        <View className="w-1/2">
          <Text className=" font-semibold italic text-xl text-white">
            {props.item.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default VehicleListItem;
