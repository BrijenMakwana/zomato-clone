import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderAgainComponent = (props) => {
  const { image, restaurant, duration } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.orderInfo}>
        <Text
          style={styles.restaurantName}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {restaurant}
        </Text>
        <View style={styles.timerContainer}>
          <Image
            source={require("../assets/images/time.png")}
            style={styles.timerImage}
          />

          <Text style={styles.duration}>{duration} min</Text>
        </View>

        <Text style={styles.offerText}>10% OFF up to ₹40</Text>
      </View>
    </View>
  );
};

export default OrderAgainComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    marginRight: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  orderInfo: {
    paddingLeft: 13,
  },
  restaurantName: {
    fontSize: 19,
    fontWeight: "500",
    textTransform: "capitalize",
    width: 130,
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  timerImage: {
    width: 20,
    height: 20,
  },
  duration: {
    fontSize: 12,
    color: "#505050",
    marginLeft: 3,
  },
  offerText: {
    marginTop: 7,
    color: "#007FFF",
    fontSize: 14,
    fontWeight: "400",
  },
});
