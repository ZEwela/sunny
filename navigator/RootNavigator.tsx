import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import Modal from "../screens/Modal";
import Order from "../screens/Order";

export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { order: Order };
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <RootStack.Screen
          name="MyModal"
          options={{ headerShown: false }}
          component={Modal}
        />
      </RootStack.Group>

      <RootStack.Group>
        <RootStack.Screen name="Order" component={Order} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
