import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  FlatList,
  Pressable,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";

import { currentDetailCharacterDataAtom } from "~atoms/currentData/characterData";
import { currentDetailFilmDataAtom } from "~atoms/currentData/filmData";
import { currentDetailSpeciesDataAtom } from "~atoms/currentData/speciesData";
import useDebounce from "~hooks/useDebounce";
import CustomButton from "~components/buttons/CustomButton";

type FormProps = {
  category: string;
  placeholder: string;
  queryFn: any;
  searchType: string;
};

const Form: React.FC<FormProps> = (props) => {
  const router = useRouter();
  const [currentDetailCharacterData, setCurrentDetailCharacterData] = useAtom(
    currentDetailCharacterDataAtom
  );
  const [currentDetailFilmData, setCurrentDetailFilmData] = useAtom(
    currentDetailFilmDataAtom
  );
  const [currentDetailSpeciesData, setCurrentDetailSpeciesData] = useAtom(
    currentDetailSpeciesDataAtom
  );
  console.log(props);
  const [searchValue, setSearchValue] = useState("");
  const debounceSearchValue = useDebounce(searchValue, 200);
  const {
    status,
    data: LiveSearchData,
    error,
    isFetching,
  } = props.queryFn(debounceSearchValue);

  // console.log(LiveSearchData);

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
            data={LiveSearchData.results.slice(0, 5)}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setCurrentDetailCharacterData(null);
                  setCurrentDetailFilmData(null);
                  setCurrentDetailSpeciesData(null);
                  console.log("item");
                  console.log("item", item);
                  router.replace({
                    pathname: `/home/${props.category.toLowerCase()}/${
                      item[props.searchType]
                    }
                    `,
                    params: {
                      searchName: item[props.searchType],
                    },
                  });
                }}
              >
                <View className="h-[25px] justify-center my-0.5 ml-2.5">
                  <Text>{item[props.searchType]}</Text>
                </View>
              </Pressable>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : null}
      </View>

      <CustomButton
        onPress={() => {
          setSearchValue("");
        }}
        text="Reset"
        bgColor="black"
        fgColor="white"
        widthPerct="100%"
        addStyle={{ marginTop: "10%" }}
        flexDir="column"
      />

      <CustomButton
        onPress={() =>
          router.push({
            pathname: `/home/${props.category.toLowerCase()}/resultsList`,
            params: {
              category: props.category,
              searchName: searchValue,
              page: 1,
            },
          })
        }
        text="Search"
        bgColor="black"
        fgColor="white"
        widthPerct="100%"
        addStyle={{ marginTop: "10%" }}
        flexDir="column"
      />

      {/* <View style={styles.button}>
        <Button
          color="white"
          title="Reset"
          onPress={() => {
            setSearchValue("");
          }}
        />
      </View> */}

      {/* <View style={styles.button}>
        <Button
          color="white"
          title="Search"
          onPress={() =>
            router.replace({
              pathname: `/home/${props.category.toLowerCase()}/resultsList`,
              params: {
                category: props.category,
                searchName: searchValue,
                page: 1,
              },
            })
          }
        />
      </View> */}
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
