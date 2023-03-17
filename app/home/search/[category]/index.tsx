import { Text, View, Image } from "react-native";
import { useSearchParams } from "expo-router";
import titleCase from "../../../../src/functions/titleCase";
import Form from "../../../../src/components/Form";
import { useRouter, Stack, usePathname } from "expo-router";

const SearchForm = () => {
  const params = useSearchParams();
  console.log(params);
  const pathname = usePathname();
  console.log("pathname", pathname);
  let category = params.category as string;
  let placeholder = params.placeholder as string;
  // console.log(category);
  // console.log(placeholder);

  category = titleCase(category);
  console.log(category);

  return (
    <>
      <Stack.Screen options={{ headerTitle: category }} />
      <View className="flex-1 items-center bg-neutral-700">
        <View>
          <Text className="font-bold text-2xl text-white mt-5 text-center">
            Search a Star Wars {category}
          </Text>
          <Form category={category} placeholder={placeholder} />
          <View className="flex-row items-end justify-center">
            {/* <Image
              className="w-80 h-64"
              source={{
                uri: "https://i.kym-cdn.com/photos/images/original/000/748/010/532.jpg",
              }}
            /> */}
          </View>
        </View>
      </View>
    </>
  );
};

export default SearchForm;
