import { Image, StyleSheet, View, Text } from "react-native";

const OrderListItem = ({ order }) => {
  return (
    <View style={styles.row}>
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View>
        <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
        <Text style={styles.orderInfo}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </View>
  );
};

export default OrderListItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "600",
  },
  orderInfo: {
    marginVertical: 5,
  },
});
