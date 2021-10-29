import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Home Page please</Text>
    </View>
  );
};