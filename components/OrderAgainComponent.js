import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OrderAgainComponent = (props) => {
  const { image, restaurant, duration, cuisines, distance, rating } = props;
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Restaurant", {
          restaurant,
          cuisines,
          duration,
          distance,
          rating,
        })
      }
    >
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
    </Pressable>
  );
};

export default OrderAgainComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    marginRight: 10,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 7,
  },
  orderInfo: {
    paddingLeft: 10,
  },
  restaurantName: {
    fontSize: 15,
    fontWeight: "500",
    textTransform: "capitalize",
    width: 130,
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  timerImage: {
    width: 15,
    height: 15,
  },
  duration: {
    fontSize: 10,
    color: "#505050",
    marginLeft: 3,
    fontWeight: "500",
  },
  offerText: {
    marginTop: 5,
    color: "#007FFF",
    fontSize: 12,
    fontWeight: "400",
  },
});
