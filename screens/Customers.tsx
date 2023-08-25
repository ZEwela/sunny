import { ScrollView, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { TabStackParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Input } from "@rneui/themed";
import { ActivityIndicator } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS, GET_ORDERS } from "../graphql/queries";
import CustomerCard from "../components/CustomerCard";

export type CustomersNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const Customers = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomersNavigationProp>();
  const [input, setInput] = useState<string>("");
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image
        source={require("../assets/car.png")}
        containerStyle={tw("w-full h-60 -mt-10")}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by Customers"
        value={input}
        onChangeText={setInput}
        containerStyle={tw("bg-white pt-5 pb-0 px-10 mb-3")}
      />
      {data?.getCustomers
        ?.filter((customer: CustomerList) =>
          customer.value.name.includes(input)
        )
        .map(({ name: ID, value: { email, name } }: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userId={ID} />
        ))}
    </ScrollView>
  );
};

export default Customers;
