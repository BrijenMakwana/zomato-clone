import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Entypo,
} from "@expo/vector-icons";

const FeaturedRestaurant = (props) => {
  const {
    image,
    restaurant,
    duration,
    distance,
    rating,
    discount,
    isVeg,
    bill,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.likeContainer}>
        <Feather name="heart" size={18} color="#FC7D86" />
      </View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      {isVeg && (
        <View style={styles.vegContainer}>
          <MaterialCommunityIcons name="leaf" size={15} color="green" />
          <Text style={styles.vegText}>pure veg</Text>
        </View>
      )}

      <View style={styles.restaurantInfo}>
        <View style={styles.restaurantDetails}>
          {/* name */}
          <Text
            style={styles.restaurantName}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {restaurant}
          </Text>
          <View style={styles.ratingContainer}>
            {/* rating */}
            <Text style={styles.rating}>{rating}</Text>
            <FontAwesome name="star" size={12} color="#fff" />
          </View>
        </View>
        <View style={styles.orderInfo}>
          <Image
            source={require("../assets/images/time.png")}
            style={styles.timerImage}
          />
          {/* delivery stats */}
          <Text style={styles.time}>{duration} min</Text>
          <Entypo name="dot-single" size={15} color="#282828" />
          <Text style={styles.time}>{distance} km</Text>
        </View>
        <View style={styles.billInfo}>
          <View
            style={{
              backgroundColor: "#FC7D86",
              width: 12,
              height: 12,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
            }}
          >
            <FontAwesome name="rupee" size={12} color="#fff" />
          </View>
          {/* bill */}
          <Text style={styles.bill}>{bill} for one</Text>
        </View>
      </View>

      {/* discount */}
      {discount && (
        <View style={styles.discountContainer}>
          <MaterialCommunityIcons
            name="brightness-percent"
            size={15}
            color="#0059E4"
          />
          <Text style={styles.discount}>{discount}% off</Text>
        </View>
      )}
    </View>
  );
};

export default FeaturedRestaurant;

const styles = StyleSheet.create({
  container: {
    width: 170,
    backgroundColor: "#fff",
    height: 290,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowOpacity: 0.1,
    elevation: 10,
    marginRight: 15,
    marginBottom: 10,
  },
  likeContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    right: 10,
    backgroundColor: "#fff",
    zIndex: 1,
    width: 35,
    height: 35,
    borderRadius: 18,
  },
  image: {
    width: "100%",
    height: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: "cover",
  },
  restaurantInfo: {
    padding: 10,
  },
  restaurantDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  restaurantName: {
    fontSize: 13,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#259547",
    padding: 5,
    borderRadius: 4,
  },
  rating: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
  },
  orderInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  timerImage: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  time: {
    fontSize: 13,
    color: "#282828",
  },
  billInfo: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  bill: {
    fontSize: 13,
    color: "#282828",
    marginLeft: 5,
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 7,
    paddingLeft: 8,
    paddingBottom: 10,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#EDF4FF",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  discount: {
    color: "#0059E4",
    fontSize: 13,
    marginLeft: 5,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  vegContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingLeft: 8,
    position: "absolute",
    backgroundColor: "rgba(240,255,255,0.8)",
    width: "100%",
    top: 120,
  },
  vegText: {
    color: "#259547",
    fontSize: 14,
    marginLeft: 5,
    textTransform: "capitalize",
    fontWeight: "500",
  },
});
