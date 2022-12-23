import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const Dish = (props) => {
  const { dishName, dishImage, isBestSeller, rating, reviews, price, about } =
    props;

  return (
    <View style={styles.container}>
      <View style={styles.dishInfo}>
        <View style={styles.veg}>
          <MaterialCommunityIcons
            name="square-rounded"
            size={20}
            color="#259547"
          />
          {isBestSeller && (
            <View style={styles.bestSellerContainer}>
              <Text style={styles.bestSellerText}>bestseller</Text>
            </View>
          )}
        </View>
        {/* dish name */}
        <Text style={styles.dishName}>{dishName}</Text>
        <View style={styles.ratingAndReviews}>
          <View style={styles.ratingContainer}>
            {[1, 2, 3, 4, 5].map((item, index) => {
              if (item <= rating) {
                return (
                  <Entypo name="star" size={14} color="#F5C033" key={index} />
                );
              } else {
                return (
                  <Entypo
                    name="star-outlined"
                    size={14}
                    color="lightgray"
                    key={index}
                  />
                );
              }
            })}
          </View>
          <Text style={styles.reviews}>{reviews} reviews</Text>
        </View>
        {/* price */}
        <Text style={styles.dishPrice}>₹{price}</Text>
        <Text style={styles.aboutDish} numberOfLines={3}>
          {about}
        </Text>
      </View>
      <View style={styles.dishImageContainer}>
        {/* dish image */}
        <Image
          source={{
            uri: dishImage,
          }}
          style={styles.dishImage}
        />
        {/* add button */}
        <Pressable style={styles.btnContainer}>
          <Text style={styles.btnText}>add</Text>
          <Feather
            name="plus"
            size={13}
            color="#E94657"
            style={{ position: "absolute", right: 3, top: 3 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Dish;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    paddingVertical: 25,
  },
  dishInfo: {
    width: "60%",
  },
  veg: {
    flexDirection: "row",
    alignItems: "center",
  },
  bestSellerContainer: {
    backgroundColor: "#E96938",
    alignItems: "center",
    justifyContent: "center",
    height: 15,
    width: 50,
    borderRadius: 5,
    marginLeft: 4,
  },
  bestSellerText: {
    color: "#fff",
    fontSize: 8,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  dishName: {
    fontSize: 15,
    fontWeight: "500",
    textTransform: "capitalize",
    marginTop: 5,
  },
  ratingAndReviews: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    backgroundColor: "#FEFAEC",
    borderRadius: 5,
    padding: 2,
  },
  reviews: {
    fontSize: 11,
    marginLeft: 4,
    fontWeight: "400",
  },
  dishPrice: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: "500",
  },
  aboutDish: {
    fontSize: 11,
    fontWeight: "400",
    color: "gray",
    marginTop: 10,
    fontWeight: "400",
    paddingRight: 17,
  },
  dishImageContainer: {
    width: "40%",
  },
  dishImage: {
    width: 145,
    height: 145,
    borderRadius: 20,
    resizeMode: "cover",
  },
  btnContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF6F7",
    justifyContent: "center",
    paddingVertical: 8,
    width: 115,
    position: "absolute",
    bottom: -6,
    left: 13,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E94657",
  },
  btnText: {
    color: "#E94657",
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 17,
    textAlign: "center",
  },
});
