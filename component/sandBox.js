import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function SandBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>One</Text>
      <Text style={styles.box2}>Two</Text>
      <Text style={styles.box3}>Three</Text>
      <Text style={styles.box4}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-evenly',
    paddingTop: 50,
    backgroundColor: "#ddd",
  },
  box1: {
    backgroundColor: "violet",
    padding:10
  },
  box2: {
    backgroundColor: "red",
    padding:10
  },
  box3: {
    backgroundColor: "pink",
    padding:10
  },
  box4: {
    backgroundColor: "yellow",
    padding:10
  },
});
