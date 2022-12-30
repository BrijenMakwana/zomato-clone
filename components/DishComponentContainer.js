import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DishComponent from "./DishComponent";
import { dishes } from "../assets/data/data";

const DishComponentContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Eat what makes you happy</Text>
      {/* dishes */}
      <View style={styles.dishes}>
        {dishes.map((item, _) => (
          <DishComponent
            image={item.image}
            dishName={item.dishName}
            key={item.id}
          />
        ))}
      </View>
    </View>
  );
};

export default DishComponentContainer;

const styles = StyleSheet.create({
  container: {
    width: "93%",
    alignSelf: "center",
    paddingTop: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dishes: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "space-between",
  },
});
