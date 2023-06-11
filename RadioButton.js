import React from "react";
import { View, Text } from "react-native";
import { Pressable } from "react-native"; //additional import.
export default function RadioButton({ data, onSelect }) {
  return (
    <View>
      {data.map((item) => {
        return (
          <Pressable onPress={() => alert("Your choice: " + item.value)}>
            <Text> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
