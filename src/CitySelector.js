import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const cities = ["London", "New York", "Tokyo"];

const CitySelector = ({ onSelect }) => {
  const [selectedCity, setSelectedCity] = useState("London");

  useEffect(() => {
    onSelect(selectedCity);
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
        }}
      >
        Select City
      </Text>

      <SelectDropdown
        data={cities}
        onSelect={(selectedItem, index) => {
          setSelectedCity(selectedItem);
          onSelect(selectedItem);
        }}
        defaultButtonText={"London"}
        defaultValue={"London"}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 5,
  },
});

export default CitySelector;
