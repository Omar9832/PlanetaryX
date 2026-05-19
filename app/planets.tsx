import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// 🌍 Planet components
import { router } from "expo-router";
import Earth from "./components/Earth";
import Jupiter from "./components/Jupiter";
import Mars from "./components/Mars";
import Mercury from "./components/Mercury";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import Venus from "./components/Venus";

const width = 290;
const height = 190;

/* ⭐ STAR COMPONENT */
const Star = () => {
  const opacity = useRef(new Animated.Value(Math.random())).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.2,
          duration: 5000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        position: "absolute",
        width: 2,
        height: 2,
        backgroundColor: "#BFC5CC",
        borderRadius: 2,
        opacity,
        top: Math.random() * height,
        left: Math.random() * width,
      }}
    />
  );
};

/* 🌍 PLANET MAP */
const PLANETS: Record<
  string,
  { component: React.ReactNode; label: string }
> = {
  earth: { component: <Earth />, label: "Earth" },
  mars: { component: <Mars />, label: "Mars" },
  venus: { component: <Venus />, label: "Venus" },
  mercury: { component: <Mercury />, label: "Mercury" },
  jupiter: { component: <Jupiter />, label: "Jupiter" },
  saturn: { component: <Saturn />, label: "Saturn" },
  uranus: { component: <Uranus />, label: "Uranus" },
};

export default function planets() {
  const [planetInput, setPlanetInput] = useState("");
  const [selectedPlanet, setSelectedPlanet] = useState("earth");

  const planetSearch = () => {
    const key = planetInput.toLowerCase().trim();
    if (PLANETS[key]) {
      setSelectedPlanet(key);
      setPlanetInput("");
    }
    else{
        Alert.alert("Invalid Planet!", "Please try again.");
        setPlanetInput("");
        
    }
  };


  return (
    <View style={styles.container2}>
      <View style={styles.container1}>
        <TouchableOpacity onPress={() => router.push("/Home")}>
          <Text style={styles.backtext}>←Back</Text>
        </TouchableOpacity>
        <Text style={styles.title1}>Search Planets</Text>

        {/* 🔍 SEARCH */}
        <View style={styles.searcharea}>
          <View style={styles.textboxcontainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Planet Name..."
              placeholderTextColor="#9CA3AF"
              value={planetInput}
              onChangeText={setPlanetInput}
            />
          </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={planetSearch}>
              <Text style={styles.buttontext}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 🌍 POPULAR */}
        <Text style={styles.subtitle}>Popular Planets</Text>

        <View style={styles.searcharea}>
          {["Mercury", "Venus", "Earth"].map((p) => (
            <TouchableOpacity
              key={p}
              onPress={() => setSelectedPlanet(p.toLowerCase())}
            >
              <View style={styles.popularbox}>
                <Text style={styles.populartext}>{p}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity onPress={() => setSelectedPlanet("mars")}>
          <View style={styles.popularbox}>
            <Text style={styles.populartext}>Mars</Text>
          </View>
        </TouchableOpacity>

        {/* 🌌 PLANET DISPLAY */}
        <View style={styles.container}>
          {Array.from({ length: 70 }).map((_, index) => (
            <Star key={index} />
          ))}

          {PLANETS[selectedPlanet]?.component}
        </View>

        {/* 🪐 PLANET NAME */}
        <Text style={styles.planettext}>
          {PLANETS[selectedPlanet]?.label}
        </Text>

        <Text style={styles.dragtext}>
          Drag to rotate • Revolving in space
        </Text>

        {/* 🔎 DETAILS */}
        <View style={styles.viewbutton}>
          <TouchableOpacity onPress={() => router.push({
          pathname: "/Details",
          params: { message: PLANETS[selectedPlanet]?.label },
        })}>
            <Text style={styles.viewtext}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

/* 🎨 STYLES */
const styles = StyleSheet.create({
  container1: {
    backgroundColor: "#16172B",
    borderWidth: 30,
    borderRadius: 50,
    flex: 1,
    borderColor: "#1A1B33",
  },
  container2: {
    backgroundColor: "#1A1B33",
    flex: 1,
  },
  title1: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  input: {
    backgroundColor: "#262736",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 50,
    color: "#E5E7EB",
    fontSize: 16,
  },
  textboxcontainer: {
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 10,
    width: 200,
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: "#1A1B33",
  },
  button: {
    borderWidth: 10,
    borderColor: "aqua",
    borderRadius: 10,
    width: 100,
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: "aqua",
  },
  buttontext: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  searcharea: {
    flexDirection: "row",
  },
  popularbox: {
    backgroundColor: "#262736",
    width: 85,
    height: 40,
    borderRadius: 40,
    marginLeft: 20,
    marginTop: 10,
  },
  populartext: {
    color: "aqua",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 8,
  },
  container: {
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 200,
    marginLeft: 30,
    marginTop: 25,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  planettext: {
    fontSize: 30,
    color: "aqua",
    fontWeight: "700",
    marginTop: 15,
    textAlign: "center",
  },
  dragtext: {
    fontSize: 13,
    color: "#9CA3AF",
    fontWeight: "700",
    marginTop: 5,
    textAlign: "center",
  },
  viewbutton: {
    borderWidth: 10,
    borderColor: "aqua",
    borderRadius: 10,
    width: 300,
    height: 50,
    marginLeft: 35,
    marginTop: 50,
    backgroundColor: "aqua",
  },
  viewtext: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 2,
  },


  backtext: {
    fontSize: 15,
    color: "aqua",
    fontWeight: "700",
    marginTop: 70,
    marginLeft: 20,
  },
});

