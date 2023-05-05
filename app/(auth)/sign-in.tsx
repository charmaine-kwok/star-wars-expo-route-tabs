import { Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import { Stack } from "expo-router";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import * as ScreenOrientation from "expo-screen-orientation";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import stateListener from "~functions/auth/auth_state_listener";
import { handleLogin } from "~functions/auth/auth_signin_password";
import DismissKeyboard from "~components/DismissKeyboard";
import CustomInput from "~components/CustomInput";
import CustomButton from "~components/buttons/CustomButton";
import { useAuth } from "~context/auth";
import app from "~functions/auth/firebaseConfig";

const auth = getAuth(app);
export default function SignIn() {
  const { signIn } = useAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("signed in");
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      signIn();
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    stateListener(), [];
  });
  //orientation
  const [orientation, setOrientation] = useState(null);
  useEffect(() => {
    checkOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange
    );
    return () => {
      ScreenOrientation.removeOrientationChangeListeners();
    };
  }, []);
  const checkOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(orientation);
  };
  const changeOrientation = async (newOrientation) => {
    console.log("newOrientation: ", newOrientation);
    await ScreenOrientation.lockAsync(newOrientation);
  };
  const handleOrientationChange = (o) => {
    setOrientation(o.orientationInfo.orientation);
  };
  console.log(orientation);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <DismissKeyboard>
        {orientation === 1 ? (
          <View className="items-center bg-neutral-700 flex-1 ">
            <Image
              className="w-[250px] sm:w-[300px] h-[15%] mt-[25%] sm:mt-[30%] mb-[10%] sm:mb-[15%]"
              resizeMode="contain"
              source={require("../../assets/pngwing.png")}
            ></Image>

            <CustomInput
              placeholder="Username"
              setValue={setUsername}
              value={username}
              icon={<FontAwesome name="user" size={24} color="darkgrey" />}
              // rules={{ required: "Username is required" }}
            />

            <CustomInput
              placeholder="Password"
              setValue={setPassword}
              value={password}
              icon={<Entypo name="lock" size={24} color="darkgrey" />}
              password={true}
              // rules={{ required: "Username is required" }}
            />

            <CustomButton
              addStyle={{ width: "70%", flexDirection: "column" }}
              widthPerct="80%"
              text=" Sign In"
              // onPress={() => signIn()}
              onPress={() => handleLogin(username, password)}
              bgColor="black"
              fgColor="white"
              flexDir="column"
            />

            <Text className="text-white my-2 sm:my-6">Forgot Password?</Text>

            <CustomButton
              text="Sign In with Facebook"
              onPress={() => signIn()}
              bgColor="#1778F2"
              fgColor="white"
              icon={
                <AntDesign name="facebook-square" size={24} color="white" />
              }
            />

            <CustomButton
              text="Sign In with Google"
              onPress={() => signIn()}
              bgColor="#DB4437"
              fgColor="white"
              icon={<AntDesign name="google" size={24} color="white" />}
            />

            <CustomButton
              text="Sign In with Apple"
              onPress={() => signIn()}
              bgColor="black"
              fgColor="white"
              icon={<AntDesign name="apple1" size={24} color="white" />}
            />

            <Text className="text-white my-2 sm:my-4">
              Don't have an account? Sign up here
            </Text>
          </View>
        ) : (
          <View className="items-center flex-row bg-neutral-700 flex-1 ">
            <View className="items-center">
              <Image
                className="w-[300px] md:w-[300px] h-[120px] my md:my-4 ml-8 md:ml-14 mr-8 md:mr-16"
                resizeMode="contain"
                source={require("../../assets/pngwing.png")}
              ></Image>
              <CustomButton
                text="Sign In with Facebook"
                onPress={() => signIn()}
                bgColor="#1778F2"
                fgColor="white"
                icon={
                  <AntDesign name="facebook-square" size={24} color="white" />
                }
              />

              <CustomButton
                text="Sign In with Google"
                onPress={() => signIn()}
                bgColor="#DB4437"
                fgColor="white"
                icon={<AntDesign name="google" size={24} color="white" />}
              />

              <CustomButton
                text="Sign In with Apple"
                onPress={() => signIn()}
                bgColor="black"
                fgColor="white"
                icon={<AntDesign name="apple1" size={24} color="white" />}
              />
            </View>

            <View className="w-[60%] mt-12">
              <CustomInput
                placeholder="Username"
                setValue={setUsername}
                value={username}
                icon={<FontAwesome name="user" size={24} color="darkgrey" />}
                // rules={{ required: "Username is required" }}
              />

              <CustomInput
                placeholder="Password"
                setValue={setPassword}
                value={password}
                icon={<Entypo name="lock" size={24} color="darkgrey" />}
                // rules={{ required: "Username is required" }}
              />

              <CustomButton
                addStyle={{ width: "70%", flexDirection: "column" }}
                widthPerct="80%"
                text=" Sign In"
                onPress={() => signIn()}
                bgColor="black"
                fgColor="white"
              />

              <Text className="text-white my-4">Forgot Password?</Text>
              <Text className="text-white my-4">
                Don't have an account? Sign up here
              </Text>
            </View>
          </View>
        )}
      </DismissKeyboard>
    </>
  );
}
