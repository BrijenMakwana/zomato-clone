import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
      {/* like */}
      <View style={styles.likeContainer}>
        <Feather name="heart" size={16} color="#FC7D86" />
      </View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

      {/* veg */}
      {isVeg && (
        <View style={styles.vegContainer}>
          <MaterialCommunityIcons name="leaf" size={13} color="green" />
          <Text style={styles.vegText}>pure veg</Text>
        </View>
      )}

      <View style={styles.restaurantInfo}>
        <View style={styles.restaurantDetails}>
          {/* name */}
          <Text
            style={styles.restaurantName}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {restaurant}
          </Text>
          <View style={styles.ratingContainer}>
            {/* rating */}
            <Text style={styles.rating}>{rating}</Text>
            <FontAwesome name="star" size={10} color="#fff" />
          </View>
        </View>
        <View style={styles.orderInfo}>
          <Image
            source={require("../assets/images/time.png")}
            style={styles.timerImage}
          />
          {/* delivery stats */}
          <Text style={styles.time}>{duration} min</Text>
          <Entypo name="dot-single" size={10} color="#282828" />
          <Text style={styles.time}>{distance} km</Text>
        </View>
        <View style={styles.billInfo}>
          <View
            style={{
              backgroundColor: "#FC7D86",
              width: 10,
              height: 10,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
            }}
          >
            <FontAwesome name="rupee" size={10} color="#fff" />
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
            size={12}
            color="#0059E4"
          />
          <Text style={styles.discount}>{discount}% off</Text>
        </View>
      )}
    </Pressable>
  );
};

export default FeaturedRestaurant;

const styles = StyleSheet.create({
  container: {
    width: 150,
    backgroundColor: "#fff",
    height: 275,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowOpacity: 0.1,
    elevation: 4,
    marginRight: 15,
    marginBottom: 10,
  },
  likeContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#fff",
    zIndex: 1,
    width: 30,
    height: 30,
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
    padding: 7,
  },
  restaurantDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  restaurantName: {
    fontSize: 12,
    flex: 1,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#259547",
    padding: 3,
    borderRadius: 4,
  },
  rating: {
    fontSize: 10,
    color: "#fff",
    fontWeight: "600",
    marginRight: 1,
  },
  orderInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  timerImage: {
    width: 12,
    height: 12,
    marginRight: 3,
  },
  time: {
    fontSize: 11,
    color: "#282828",
  },
  billInfo: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  bill: {
    fontSize: 11,
    color: "#282828",
    marginLeft: 3,
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
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
    fontSize: 10,
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
    top: 114,
  },
  vegText: {
    color: "#259547",
    fontSize: 10,
    marginLeft: 5,
    textTransform: "capitalize",
    fontWeight: "500",
  },
});
