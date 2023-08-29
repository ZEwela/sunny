import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import { Card, Icon } from "@rneui/themed";
import { Divider } from "@rneui/base";
import MapView, { Marker } from "react-native-maps";

type Props = {
  order: Order;
};
const DeliveryCard = ({ order }: Props) => {
  const tw = useTailwind();
  return (
    <Card
      containerStyle={[
        tw("rounded-lg my-4 "),
        { elevation: 5, backgroundColor: "#59C1CC", borderColor: "#59C1CC" },
      ]}
    >
      <View style={tw("p-2")}>
        <Icon name="box" type="entypo" size={50} color="white" />
      </View>
      <View>
        <Text style={tw("text-xs text-center uppercase text-white font-bold")}>
          {order.carrier} - {order.trackingId}
        </Text>
        <Text style={tw("text-center text-lg text-white font-bold")}>
          Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
        </Text>
        <Divider color="white" />
      </View>

      <View style={tw("mx-auto -mt-3 mb-3")}>
        <Text style={tw("text-center text-base text-white font-bold mt-5")}>
          Address
        </Text>
        <Text style={tw("text-sm text-center text-white")}>
          {order.Address}, {order.City}
        </Text>
        <Text style={tw("text-sm text-center text-white italic")}>
          Shipping Cost: £{order.shippingCost}
        </Text>
      </View>

      <Divider color="white" />

      <View style={tw("p-2")}>
        {order.trackingItems.items.map((item) => (
          <View
            key={item.item_id}
            style={tw("flex-row justify-between items-center p-1")}
          >
            <Text style={tw("text-sm italic text-white")}>{item.name}</Text>
            <Text style={tw("text-lg text-center text-white")}>
              <Text style={tw("text-sm")}> x </Text>
              {item.quantity}
            </Text>
          </View>
        ))}
      </View>

      <MapView
        initialRegion={{
          latitude: order.Lat,
          longitude: order.Lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={[tw("w-full"), { height: 200 }]}
      >
        {order.Lat && order.Lng && (
          <Marker
            coordinate={{ latitude: order.Lat, longitude: order.Lng }}
            title="Delivery Location"
            description={order.Address}
            identifier="destination"
          />
        )}
      </MapView>
    </Card>
  );
};

export default DeliveryCard;