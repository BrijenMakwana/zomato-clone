import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Feather, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

const Dish = (props) => {
  const [quantity, setQuantity] = useState(0);
  const {
    dishName,
    dishImage,
    isBestSeller,
    rating,
    reviews,
    price,
    about,
    setIsDishModalOpen,
    setDishInfo,
    setTotalOrderItems,
    setTotalOrderAmount,
  } = props;

  const openDishModal = () => {
    setIsDishModalOpen(true);
    setDishInfo({
      dishName,
      dishImage,
      isBestSeller,
      rating,
      reviews,
      price,
      quantity,
      setQuantity,
    });
  };

  const addItem = () => {
    setQuantity(quantity + 1);
    setTotalOrderItems((prev) => prev + 1);
    setTotalOrderAmount((prev) => prev + price);
  };

  const deleteItem = () => {
    setQuantity(quantity - 1);
    setTotalOrderItems((prev) => prev - 1);
    setTotalOrderAmount((prev) => prev - price);
  };

  return (
    <Pressable style={styles.container} onPress={openDishModal}>
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
        {quantity === 0 ? (
          <Pressable style={styles.btnContainer} onPress={addItem}>
            <Text style={styles.btnText}>add</Text>
            <Feather
              name="plus"
              size={13}
              color="#E94657"
              style={{ position: "absolute", right: 3, top: 3 }}
            />
          </Pressable>
        ) : (
          <View style={styles.quantityContainer}>
            {/* add */}
            <Pressable style={styles.quantityBtn} onPress={deleteItem}>
              <Entypo name="minus" size={16} color="#fff" />
            </Pressable>
            {/* quantity */}
            <Text style={styles.quantity}>{quantity}</Text>
            {/* remove */}
            <Pressable style={styles.quantityBtn} onPress={addItem}>
              <Entypo name="plus" size={16} color="#fff" />
            </Pressable>
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default Dish;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    borderStyle: "dashed",
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
    left: 15,
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF6F7",
    width: 115,
    borderRadius: 8,
    justifyContent: "space-between",
    backgroundColor: "#E23946",
    position: "absolute",
    bottom: -6,
    left: 15,
  },
  quantityBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  quantity: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    marginHorizontal: 10,
  },
});
