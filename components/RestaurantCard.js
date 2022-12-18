import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";

const RestaurantCard = (props) => {
  const {
    image,
    restaurant,
    duration,
    distance,
    bill,
    rating,
    discount,
    isVeg,
    totalOrder,
    cuisines,
  } = props;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      {/* isVeg */}
      {isVeg && (
        <View style={styles.vegContainer}>
          <MaterialCommunityIcons name="leaf" size={15} color="#fff" />
          <Text style={styles.vegText}>pure veg RESTAURANT</Text>
        </View>
      )}

      {/* like */}
      <View style={styles.likeContainer}>
        <Feather name="heart" size={20} color="#FC7D86" />
      </View>

      {/* distance and duration */}

      <View style={styles.timerContainer}>
        <Image
          source={require("../assets/images/time.png")}
          style={styles.timerImage}
        />
        <Text style={styles.duration}>{duration} min</Text>
        <Text style={{ fontSize: 13, paddingHorizontal: 4 }}>|</Text>
        <Text style={styles.distance}>{distance} km</Text>
      </View>

      {/* discount */}
      <View style={styles.discountContainer}>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={15}
          color="#fff"
        />
        <Text style={styles.discount}>{discount}% off</Text>
      </View>

      <View style={styles.restaurantInfo}>
        <View style={styles.restaurantDetails}>
          {/* restaurant name */}
          <Text style={styles.restaurantName}>{restaurant}</Text>
          {/* rating */}
          <View style={styles.ratingContainer}>
            {/* rating */}
            <Text style={styles.rating}>{rating}</Text>
            <FontAwesome name="star" size={12} color="#fff" />
          </View>
        </View>
        <View style={styles.cuisineDetails}>
          <Text style={styles.cuisine}>
            {cuisines.map((item) => {
              return `${item}, `;
            })}
          </Text>
          <Text style={styles.bill}>₹{bill} for one</Text>
        </View>

        {/* hr */}
        <View
          style={{ height: 0.1, backgroundColor: "gray", marginVertical: 10 }}
        />

        {/* total number of order placed so far */}
        <View style={styles.totalOrder}>
          <View style={styles.trendingIconContainer}>
            <Ionicons name="trending-up" size={12} color="#fff" />
          </View>
          <Text style={styles.orderPlaced}>
            {totalOrder}+ order placed from here recently
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    width: "93%",
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowOpacity: 0.1,
    elevation: 10,
    borderRadius: 20,
    marginVertical: 13,
  },
  likeContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 55,
    right: 15,
    backgroundColor: "#fff",
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  vegContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: 8,
    position: "absolute",
    backgroundColor: "rgba(42, 147, 74, 0.8)",
    width: "100%",
    top: 0,
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  vegText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  timerContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    position: "absolute",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    right: 15,
    top: 212,
  },
  timerImage: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  duration: {
    fontSize: 13,
  },
  distance: {
    fontSize: 13,
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 212,
    left: -7,
    backgroundColor: "#0059E4",
    padding: 5,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  discount: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 4,
  },
  restaurantInfo: {
    paddingTop: 20,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  restaurantDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  restaurantName: {
    fontSize: 23,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#259547",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
  rating: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "600",
    marginRight: 4,
  },
  cuisineDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 7,
  },
  cuisine: {
    fontSize: 15,
    fontWeight: "400",
    textTransform: "capitalize",
  },
  bill: {
    fontSize: 15,
    fontWeight: "400",
  },
  totalOrder: {
    flexDirection: "row",
  },
  trendingIconContainer: {
    width: 20,
    height: 20,
    backgroundColor: "#707FBD",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  orderPlaced: {
    fontSize: 13.5,
    marginLeft: 10,
    color: "#505050",
  },
});
