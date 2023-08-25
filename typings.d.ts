type Customer = {
  email: string;
  name: string;
};

type CustomerList = {
  name: ID;
  value: Customer;
};

type TrackingItems = {
  customer_id: ID;
  items: Item[];
  customer: Customer;
};

type Item = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};

type OrderResponse = {
  value: Order;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};

type Order = {
  carrier: string;
  createdAt: string;
  shippingCost: number;
  trackingId: string;
  Address: string;
  City: string;
  Lat: number;
  Lng: number;
  trackingItems: TrackingItems;
};
