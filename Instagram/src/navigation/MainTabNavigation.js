import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedScreen from "../screens/FeedScreen";
import NotImplementedScreen from "../screens/NotImplementedScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={NotImplementedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={NotImplementedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="movie" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifcations"
        component={NotImplementedScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
