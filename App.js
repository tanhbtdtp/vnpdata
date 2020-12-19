import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Screens/Home";
import Main from "./Screens/Main";
import KhachHang from "./Screens/KhachHang";
import GanGoi from "./Screens/GanGoi";

const header_color = "#8385a6";
const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: "Trung Tâm Kinh Doanh",
              headerStyle: {
                backgroundColor: header_color,
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="GanGoi"
            component={GanGoi}
            options={{
              title: "Gán gói cước",
              headerStyle: {
                backgroundColor: header_color,
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="KhachHang"
            component={KhachHang}
            options={{
              title: "Tra cứu thông tin",
              headerStyle: {
                backgroundColor: header_color,
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
