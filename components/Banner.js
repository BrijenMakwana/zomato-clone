import { Image, StyleSheet, Text, View } from "react-native";
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
    marginVertical: 9,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 20,
    resizeMode: "stretch",
  },
});
