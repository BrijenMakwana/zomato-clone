import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Entypo,
} from "@expo/vector-icons";

const RestaurantCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
        style={styles.image}
      />
      {/* isVeg */}
      <View style={styles.vegContainer}>
        <MaterialCommunityIcons name="leaf" size={15} color="#fff" />
        <Text style={styles.vegText}>pure veg RESTAURANT</Text>
      </View>

      {/* like */}
      <View style={styles.likeContainer}>
        <Feather name="heart" size={18} color="#FC7D86" />
      </View>

      {/* distance and duration */}

      <View style={styles.timerContainer}>
        <Image
          source={require("../assets/images/time.png")}
          style={styles.timerImage}
        />
        <Text style={styles.duration}>36 min</Text>
        <Text style={{ fontSize: 13, paddingHorizontal: 4 }}>|</Text>
        <Text style={styles.distance}>7 km</Text>
      </View>

      {/* discount */}
      <View style={styles.discountContainer}>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={15}
          color="#fff"
        />
        <Text style={styles.discount}>10% off</Text>
      </View>

      <View style={styles.RestaurantInfo}>
        <View style={styles.restaurantDetails}>
          {/* restaurant name */}
          <Text style={styles.restaurantName}>22nd Parallel</Text>
          {/* rating */}
          <View style={styles.ratingContainer}>
            {/* rating */}
            <Text style={styles.rating}>4.2</Text>
            <FontAwesome name="star" size={12} color="#fff" />
          </View>
        </View>
        <View style={styles.cuisineDetails}>
          <Text style={styles.cuisine}>South Indian, Beverages</Text>
          <Text style={styles.bill}>₹150 for one</Text>
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
    width: 35,
    height: 35,
    borderRadius: 18,
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
    fontWeight: "500",
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

  RestaurantInfo: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  restaurantDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  restaurantName: {
    fontSize: 23,
    fontWeight: "500",
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
  },
  bill: { fontSize: 15, fontWeight: "400" },
});
