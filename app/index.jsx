import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-[30px]">
          
          
          <Image
            source={images.symlogo}
            className="max-w-[500px] w-full h-[500px]"
            // resizeMode="contain"
          />

          <View className="absolute">
            <Text className="text-3xl text-white font-bold text-center mt-[150px]">
              Your Yoga{" "}
              <Text className="text-secondary-200">COMPANION!</Text>
            </Text> 
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />

          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
          Find your personalized Yoga Tutor without any dependecy here
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
