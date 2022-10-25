import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddPostScreen from "../screens/AddPostScreen";
import MainTabNavigator from "./MainTabNavigation";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="New Post" component={AddPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
