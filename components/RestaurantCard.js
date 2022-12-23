import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
      {/* isVeg */}
      {isVeg && (
        <View style={styles.vegContainer}>
          <MaterialCommunityIcons name="leaf" size={13} color="#fff" />
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
        <Text style={{ fontSize: 10, paddingHorizontal: 3 }}>|</Text>
        <Text style={styles.distance}>{distance} km</Text>
      </View>

      {/* discount */}
      <View style={styles.discountContainer}>
        <MaterialCommunityIcons
          name="brightness-percent"
          size={12}
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
            <FontAwesome name="star" size={10} color="#fff" />
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
            <Ionicons name="trending-up" size={9} color="#fff" />
          </View>
          <Text style={styles.orderPlaced}>
            {totalOrder}+ order placed from here recently
          </Text>
        </View>
      </View>
    </Pressable>
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
    elevation: 4,
    borderRadius: 20,
    marginVertical: 13,
  },
  likeContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 40,
    right: 10,
    backgroundColor: "#fff",
    zIndex: 1,
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 220,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  vegContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    position: "absolute",
    backgroundColor: "rgba(42, 147, 74, 0.9)",
    width: "100%",
    top: 0,
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  vegText: {
    color: "#fff",
    fontSize: 11,
    marginLeft: 5,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  timerContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    position: "absolute",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    right: 10,
    top: 192,
    alignItems: "center",
  },
  timerImage: {
    width: 11,
    height: 11,
    marginRight: 3,
  },
  duration: {
    fontSize: 10,
    fontWeight: "500",
  },
  distance: {
    fontSize: 10,
    fontWeight: "500",
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 190,
    left: -7,
    backgroundColor: "#0059E4",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  discount: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: "bold",
    marginLeft: 4,
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
    fontSize: 18,
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
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    marginRight: 4,
  },
  cuisineDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  cuisine: {
    fontSize: 11,
    fontWeight: "500",
    textTransform: "capitalize",
    color: "#484848",
  },
  bill: {
    fontSize: 11,
    fontWeight: "500",
    color: "#484848",
  },
  totalOrder: {
    flexDirection: "row",
    alignItems: "center",
  },
  trendingIconContainer: {
    width: 17,
    height: 17,
    backgroundColor: "#707FBD",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  orderPlaced: {
    fontSize: 9,
    marginLeft: 7,
    color: "#505050",
    fontWeight: "500",
  },
});
