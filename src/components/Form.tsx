import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  FlatList,
  Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "expo-router";
import useDebounce from "../api/useDebounce";
import { useSearchCharacter } from "../api/Hooks";
import { currentDetailScreenDataAtom } from "../atoms/currentDetailScreenData";
import { useAtom } from "jotai";

type FormProps = {
  category: string;
  placeholder: string;
};

const Form: React.FC<FormProps> = (props) => {
  const [currentDetailScreenData, setCurrentDetailScreenData] = useAtom(
    currentDetailScreenDataAtom
  );

  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const debounceSearchValue = useDebounce(searchValue, 200);
  const {
    status,
    data: LiveSearchData,
    error,
    isFetching,
  } = useSearchCharacter(debounceSearchValue);

  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
    },
  });
  console.log(props.category);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.category}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => setSearchValue(value)}
            value={searchValue}
            placeholder={props.placeholder}
          />
        )}
        name="Name"
        rules={{ required: true }}
      />
      <View>
        {LiveSearchData && searchValue !== "" ? (
          <FlatList
            className="bg-gray-300 rounded-b-lg"
            data={LiveSearchData.results.slice(0, 7)}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setCurrentDetailScreenData(null);
                  router.replace({
                    pathname: `/home/search/${props.category.toLowerCase()}/results
                    `,
                    params: {
                      name: item.name,
                    },
                  });
                }}
              >
                <View className="h-[25px] justify-center my-0.5 ml-2.5">
                  <Text>{item.name}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : null}
      </View>

      <View style={styles.button}>
        <Button
          color="white"
          title="Reset"
          onPress={() => {
            setSearchValue("");
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          color="white"
          title="Search"
          onPress={() =>
            router.replace({
              pathname: `/home/search/${props.category.toLowerCase()}/results`,
              params: {
                category: props.category,
                searchName: searchValue,
                page: 1,
              },
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: "white",
    marginBottom: 20,
    fontSize: 20,
    justifyContent: "flex-start",
    textAlign: "center",
  },
  button: {
    marginTop: 40,
    color: "white",
    height: 40,
    backgroundColor: "black",
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    // paddingTop: Constants.statusBarHeight,
    padding: 18,
    minWidth: "80%",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});

export default Form;
