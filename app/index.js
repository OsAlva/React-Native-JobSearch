import {View, ScrollView, SafeAreaView} from "react-native";
import {Text} from "react-native";
import { useState } from "react";
import {Stack, useRouter} from 'expo-router';

import {COLORS, icons, images, SIZES, FONTS} from "../constants";
import {
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome
        } from "../components";

export default function Home() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    //allow show the content safely without any notches or home buttons
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.white },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
            ),
            headerTitle: "",
          }}
        />
       <ScrollView showsVerticalScrollIndicator={false}>
            <View 
                style={{
                    flex:1,
                    padding: SIZES.medium
                    }}
            > 
                <Welcome 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick={() => {
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`);
                        }
                    }}
                />
                <Popularjobs />
                <Nearbyjobs />
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}