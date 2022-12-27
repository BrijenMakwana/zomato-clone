import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderAgainComponent from "./OrderAgainComponent";
import { restaurantData } from "../assets/data/data";

const OrderAgainContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Order again</Text>
        <Text style={styles.history}>view history</Text>
      </View>

      <View style={styles.list}>
        <FlatList
          data={restaurantData}
          renderItem={({ item }) => (
            <OrderAgainComponent
              image={item.image}
              restaurant={item.restaurant}
              duration={item.duration}
              cuisines={item.cuisines}
              distance={item.distance}
              rating={item.rating}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default OrderAgainContainer;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    width: "93%",
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  history: {
    fontSize: 13,
    fontWeight: "500",
    color: "#E23946",
  },
  list: {},
});
