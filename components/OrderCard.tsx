import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigator/RootNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

type Props = {
  item: Order;
};

const OrderCard = ({ item }: Props) => {
  const tw = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  return (
    <TouchableOpacity
      style={tw("mx-5 my-2 ")}
      onPress={() => navigation.navigate("Order", { order: item })}
    >
      <Card containerStyle={tw("m-0 rounded-lg ")}>
        <View style={tw("flex-row justify-between items-center")}>
          <View>
            <Icon
              name="truck-delivery"
              color="#E86A7C"
              type="material-community"
            />
            <Text style={{ fontSize: 10 }}>
              {new Date(item.createdAt).toDateString()}
            </Text>
          </View>
          <View>
            <Text style={tw("text-xs text-gray-500")}>
              {item.carrier}-{item.trackingId}
            </Text>
            <Text style={tw("text-base text-gray-500 font-bold")}>
              {item.trackingItems.customer.name}
            </Text>
          </View>

          <View style={tw("flex-row items-center")}>
            <Text style={(tw("text-sm"), { color: "#E86A7C" })}>
              {item.trackingItems.items.length} x{"  "}
            </Text>
            <Icon name="box" type="entypo" color="black" size={20} />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default OrderCard;
