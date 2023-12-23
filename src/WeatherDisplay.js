// WeatherDisplay.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeatherDisplay = ({ city }) => {
  if (!city) {
    return null;
  }

  const weatherData = {
    London: { temperature: "15°C", description: "Cloudy" },
    "New York": { temperature: "22°C", description: "Sunny" },
    Tokyo: { temperature: "18°C", description: "Rainy" },
  };

  const { temperature, description } = weatherData[city];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Weather in:
        <Text style={styles.cityText}>{" "}{city}</Text>
      </Text>
      <View style={styles.imageContainer}>
        <View>
          <Text style={styles.temperatureText}>Temperature</Text>
          <View style={styles.rowContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2w7ULRMJuGMyKdC-2UdzNzg2AJVf0YS2nNYx-ELaE05sTCOtiqlz4J4eShda5VR9AiHw&usqp=CAU",
              }}
            />
            <Text style={styles.temperatureValue}>{temperature}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.descriptionText}>
        Description:
        <Text style={styles.descriptionValue}>{description}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 300,
    height: 400,
  },
  headerText: {
    fontSize: 30,
  },
  cityText: {
    color: "white",
    fontWeight: "800",

  },
  imageContainer: {
    marginTop: 10,
  },
  temperatureText: {
    color: "black",
    fontSize: 20,
  },
  rowContainer: {
    flexDirection: "row",
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: "cover",
  },
  temperatureValue: {
    color: "white",
    fontSize: 40,
    fontWeight: "800",
  },
  descriptionText: {
    fontSize: 20,
  },
  descriptionValue: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
});

export default WeatherDisplay;
