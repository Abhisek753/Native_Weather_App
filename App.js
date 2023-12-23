// App.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WeatherDisplay from './src/WeatherDisplay';
import CitySelector from './src/CitySelector';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <View style={styles.container}>
      <CitySelector onSelect={handleCitySelect} />
      <WeatherDisplay city={selectedCity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    backgroundColor:"#7cdafe"

  },
});

export default App;
