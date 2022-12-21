import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";

const Category = (props) => {
  const { title } = props;
  return (
    <View style={styles.container}>
      {title === "sort" && (
        <MaterialIcons
          name="sort"
          size={20}
          color="black"
          style={styles.leftIcon}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      {(title === "sort" || title === "cuisines" || title === "more") && (
        <FontAwesome
          name="sort-down"
          size={14}
          color="black"
          style={styles.rightIcon}
        />
      )}
      {title === "rating 4.0" && (
        <AntDesign name="plus" size={10} color="black" />
      )}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 0.3,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "gray",
    paddingVertical: 6,
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    flexDirection: "row",
  },
  leftIcon: {
    marginRight: 5,
  },
  title: {
    fontSize: 10,
    textTransform: "capitalize",
    fontWeight: "600",
  },
  rightIcon: {
    marginLeft: 7,
    marginTop: -7,
  },
});
