import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const MenuFAB = (props) => {
  const { openQuickMenu, setOpenQuickMenu } = props;

  return (
    <Pressable
      style={styles.container}
      onPress={() => setOpenQuickMenu((prev) => !prev)}
    >
      <Image
        source={
          openQuickMenu
            ? require("../assets/images/closeMenu.jpg")
            : require("../assets/images/fab.jpg")
        }
        style={styles.image}
      />
      <Text style={styles.btnText}>menu</Text>
    </Pressable>
  );
};

export default MenuFAB;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "rgb(28,28,28)",
    flexDirection: "row",
    alignItems: "center",
    width: 110,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    top: 640,
    left: "35%",
    shadowColor: "rgb(28,28,28)",
    shadowOpacity: 0.5,
    elevation: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  btnText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 10,
    textTransform: "capitalize",
  },
});
