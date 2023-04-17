import { View, FlatList, Alert } from "react-native";
import { useRouter } from "expo-router";

import { useSearchVehicles } from "~hooks/Hooks";
import VehicleListItem from "./VehicleListItem";
import Loading from "~components/Loading";

type VehicleListProps = {
  searchName: string;
};

const VehicleList: React.FC<VehicleListProps> = (props) => {
  console.log(props);
  const router = useRouter();
  const { data, isFetching, isLoading } = useSearchVehicles(props.searchName);

  if (isFetching || isLoading) {
    console.log("isFetching");
    return <Loading />;
  }

  const createTwoButtonAlert = () => {
    Alert.alert("Error", "Please enter a valid name.", [
      { text: "OK", onPress: () => router.back, style: "cancel" },
    ]);
    return null;
  };
  if (data.length === 0) {
    return createTwoButtonAlert();
  }

  console.log(data);
  return (
    <View className="flex-row flex-1 my-4 mx-4">
      <FlatList
        data={data.results}
        renderItem={({ item, index }) => <VehicleListItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default VehicleList;
