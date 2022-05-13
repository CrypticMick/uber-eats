import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.row}
      onPress={() => navigation.navigate("Order", { id: order.id })}
    >
      <Image source={{ uri: order.Restaurant.image }} style={styles.image} />

      <View>
        <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>
        <Text style={styles.orderInfo}>3 items &#8226; $38.45</Text>
        <Text>2 days ago &#8226; {order.status}</Text>
      </View>
    </Pressable>
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
