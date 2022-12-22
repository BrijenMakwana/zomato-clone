import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Dish from "./Dish";
import { MaterialIcons } from "@expo/vector-icons";

const DishCategory = () => {
  const [isExpand, setIsExpand] = useState(true);

  const toggleExpand = () => {
    setIsExpand(!isExpand);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.expandContainer} onPress={toggleExpand}>
        {/* dish category */}
        <Text style={styles.dishCategory}>south indian dishes</Text>

        {/* expand icons */}
        <MaterialIcons
          name={isExpand ? "arrow-drop-up" : "arrow-drop-down"}
          size={30}
          color="black"
        />
      </Pressable>

      {/* dishes */}
      {isExpand && (
        <>
          <Dish />
          <Dish />
          <Dish />
        </>
      )}
    </View>
  );
};

export default DishCategory;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    marginVertical: 7,
  },
  expandContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  dishCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    textTransform: "capitalize",
    borderLeftWidth: 3,
    borderLeftColor: "#E94657",
    paddingLeft: 13,
  },
});
