import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons/";
import { Ionicons } from "@expo/vector-icons";

import TabBarIcon from "~components/tabBarIcon/tabBarIcon";

export default function Layout1() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        unmountOnBlur: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: "/home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused}>
              <FontAwesome name="home" size={focused ? 28 : 24} color={color} />
            </TabBarIcon>
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="SearchSelectCategory"
        options={{
          href: "/home/SearchSelectCategory",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused}>
              <FontAwesome
                name="search"
                size={focused ? 28 : 24}
                color={color}
              />
            </TabBarIcon>
          ),
          title: "Category",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          // href: "home/profile/userInfo",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon focused={focused}>
              <Ionicons name="person" size={focused ? 28 : 24} color={color} />
            </TabBarIcon>
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="random"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />

      <Tabs.Screen
        name="characters"
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          href: null,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="films"
        options={{
          href: null,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="species"
        options={{
          href: null,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="starships"
        options={{
          href: null,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="vehicles"
        options={{
          href: null,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="planets"
        options={{
          href: null,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="BarCodeScanner"
        options={{
          href: null,
          headerTitle: "QR code Scanner",
        }}
      />
    </Tabs>
  );
}
