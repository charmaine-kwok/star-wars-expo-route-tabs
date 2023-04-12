import { Text, View } from "react-native";
import DismissKeyboard from "~components/DismissKeyboard";
import { Stack } from "expo-router";
import titleCase from "~functions/titleCase";

import Form from "./Form";

type SearchFormProps = {
  category: string;
  placeholder: string;
  queryFn: any;
  searchType: string;
};

const CategorySearchForm: React.FC<SearchFormProps> = (props) => {
  console.log("SearchForm");

  console.log(props);

  return (
    <>
      <Stack.Screen options={{ headerTitle: titleCase(props.category) }} />
      <DismissKeyboard>
        <View className="flex-1 items-center bg-neutral-700">
          <View>
            <Text className="font-bold text-2xl text-white mt-5 text-center">
              Search a Star Wars {titleCase(props.category)}
            </Text>
            <Form
              searchType={props.searchType}
              queryFn={props.queryFn}
              category={titleCase(props.category)}
              placeholder={props.placeholder}
            />
          </View>
        </View>
      </DismissKeyboard>
    </>
  );
};

export default CategorySearchForm;
