import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ToDoItem({ value, pressHandler }) {
  // console.log(value);

  return (
    <TouchableOpacity onPress={() => pressHandler(value.id)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color='red' />

        <Text style={styles.itemText}>{value.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection:'row'
  },
  itemText:{
    marginLeft:10
  }
});
