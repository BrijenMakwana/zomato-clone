import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Coupon from "./Coupon";

const RestaurantHead = () => {
  return (
    <View style={styles.container}>
      <View style={styles.restaurantDetails}>
        <View style={styles.restaurantInfo}>
          <Text style={styles.restaurantName}>22nd Parallel</Text>
          <Text style={styles.cuisine}>South Indian, Beverages</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>Alkapuri, Vadodara</Text>
            <FontAwesome name="sort-down" size={14} style={styles.rightIcon} />
          </View>
          <View style={styles.timerContainer}>
            <Image
              source={require("../assets/images/time.png")}
              style={styles.timerImage}
            />
            <Text style={styles.duration}>36 min</Text>
            <Text
              style={{ fontSize: 13, paddingHorizontal: 7, color: "lightgray" }}
            >
              |
            </Text>
            <Text style={styles.distance}>7 km away</Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingTopContainer}>
            <Text style={styles.rating}>4.3</Text>
            <FontAwesome
              name="star"
              size={16}
              color="#fff"
              style={{ marginLeft: 3 }}
            />
          </View>
          <View style={styles.reviewsContainer}>
            <Text style={styles.totalReviews}>25.2K</Text>
            <Text style={styles.reviews}>reviews</Text>
          </View>
        </View>
      </View>

      {/* Coupons */}

      <View style={styles.couponList}>
        <Coupon />
      </View>
    </View>
  );
};

export default RestaurantHead;

const styles = StyleSheet.create({
  container: {
    width: "93%",
    backgroundColor: "#fff",
    borderRadius: 20,
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  restaurantDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 25,
    fontWeight: "600",
  },
  cuisine: {
    fontSize: 14,
    marginTop: 5,
    color: "#202020",
    fontWeight: "400",
    textTransform: "capitalize",
  },
  locationContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  location: {
    color: "#606060",
    fontSize: 13,
    fontWeight: "300",
    textTransform: "capitalize",
  },
  rightIcon: {
    marginLeft: 5,
    color: "#E23946",
  },
  timerContainer: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  timerImage: {
    width: 20,
    height: 20,
  },
  duration: {
    fontSize: 14,
    marginLeft: 3,
  },
  distance: {
    fontSize: 14,
  },
  ratingContainer: {
    height: 75,
    width: 78,
    borderRadius: 20,
    borderWidth: 0.2,
    borderColor: "#787878",
  },
  ratingTopContainer: {
    backgroundColor: "#259547",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: "50%",
  },
  rating: {
    fontSize: 23,
    color: "#fff",
    fontWeight: "600",
  },
  reviewsContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 3,
  },
  totalReviews: {
    fontSize: 14,
  },
  reviews: {
    fontSize: 11,
    textTransform: "capitalize",
    color: "#606060",
  },
});
