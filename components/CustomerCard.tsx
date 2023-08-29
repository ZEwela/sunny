import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import { CustomersNavigationProp } from "../screens/Customers";
import { Card, Icon } from "@rneui/themed";

type Props = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomersNavigationProp>();
  return (
    <TouchableOpacity
      style={tw("mx-5 my-2")}
      onPress={() =>
        navigation.navigate("MyModal", { name: name, userId: userId })
      }
    >
      <Card containerStyle={tw("m-0 rounded-lg ")} wrapperStyle={tw("")}>
        <View style={tw("flex-row justify-between")}>
          <View>
            <Text style={tw("text-2xl font-bold ")}>{name}</Text>
            <Text style={[tw("text-sm"), { color: "#59C1CC" }]}>
              ID: {userId}
            </Text>
          </View>
          <View style={tw("flex-row justify-end items-center mb-5")}>
            <Text style={tw("flex text-sm text-gray-400 mr-5")}>
              {loading ? (
                <ActivityIndicator size="small" color="#59C1CC" />
              ) : (
                `${orders.length} x`
              )}
            </Text>
            <Icon name="box" type="entypo" color="#59C1CC" size={50} />
          </View>
        </View>

        <Card.Divider />
        <Text style={tw("text-gray-700")}>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
