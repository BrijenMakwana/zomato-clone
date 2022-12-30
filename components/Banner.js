import { Image, StyleSheet, View } from "react-native";
import React from "react";

const Banner = (props) => {
  const { image } = props;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: "93%",
    alignSelf: "center",
    marginVertical: 7,
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "contain",
  },
});
