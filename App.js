import React from "react";
import { View } from "react-native";
import { Text, StyleSheet, ScrollView, Dimensions } from "react-native";


export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <ScrollView pagingEnabled horizontal contentContainerStyle={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>90도</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>90도</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>90도</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
 
  );
  }
const {width:SCREEN_WIDTH} = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  city: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 50,
    fontWeight: "500",
  },
  weather: {
    
    backgroundColor: "#ffebcd"
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 100,
    fontSize: 158,
  },
  description: {
    marginTop: -30,
    fontSize: 30,
  },
});
