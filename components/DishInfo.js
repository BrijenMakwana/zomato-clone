import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const DishInfo = (props) => {
  const { dishName, dishImage, isBestSeller, rating, reviews } = props;
  return (
    <View style={styles.container}>
      {/* dish image */}
      <Image
        source={{
          uri: dishImage,
        }}
        style={styles.dishImage}
      />
      <View style={styles.veg}>
        <MaterialCommunityIcons
          name="square-rounded"
          size={20}
          color="#259547"
        />
        {isBestSeller && (
          <View style={styles.bestSellerContainer}>
            <Text style={styles.bestSellerText}>must try</Text>
          </View>
        )}
      </View>

      {/* dish information  */}
      <View style={styles.dishInfo}>
        {/* dish name */}
        <Text style={styles.dishName}>{dishName}</Text>
        {/* like */}
        <View style={styles.likeContainer}>
          <Feather name="heart" size={20} color="#FC7D86" />
        </View>
      </View>

      {/* rating and reviews */}
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
    </View>
  );
};

export default DishInfo;

const styles = StyleSheet.create({
  container: {
    width: "93%",
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 15,
    padding: 8,
    paddingBottom: 12,
    marginTop: 12,
  },
  dishImage: {
    width: "100%",
    alignSelf: "center",
    height: 250,
    borderRadius: 10,
    resizeMode: "contain",
  },
  veg: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
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
  dishInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  dishName: {
    fontSize: 15,
    fontWeight: "500",
    textTransform: "capitalize",
    marginTop: 5,
    flex: 1,
  },
  likeContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: "lightgray",
  },
  ratingAndReviews: {
    flexDirection: "row",
    marginLeft: 5,
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
});
