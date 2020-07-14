import React from "react";

import { StyleSheet, Text, View } from "react-native";

const BookScreen = ({ navigation, route }) => {
  const book = route.params;

  return (
    <View style={styles.container}>
      <Text>{book.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BookScreen;
