import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

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

/* 🌌 MAIN SCREEN */
export default function index() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      {/* STAR BACKGROUND */}
      {Array.from({ length: 70 }).map((_, index) => (
        <Star key={index} />
      ))}

      {/* CONTENT */}
      <Text style={styles.title1}>Welcome to</Text>
      <Text style={styles.title2}>PlanetaryX</Text>
      <Text style={styles.subtitle}>Explore the Solar System in 3D</Text>

      <View style={styles.buttoncontainer}>
        <View style={styles.button1}>
          <TouchableOpacity onPress={() => router.push("/Login")}>
            <Text style={styles.buttonText1}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button2}>
          <TouchableOpacity onPress={() => router.push("/SignUp")}>
            <Text style={styles.buttonText2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={()=>router.push("/Home")}>
        <Text>
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}

/* 🎨 STYLES */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  title1: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
    color: "#E5E7EB",
  },
  title2: {
    fontSize: 50,
    fontWeight: "800",
    color: "#38BDF8",
  },
  subtitle: {
    fontSize: 15,
    color: "#9CA3AF",
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 20,
  },
  buttoncontainer: {
    marginTop: 10,
  },
  button1: {
    backgroundColor: "#5BC8FA",
    paddingVertical: 12,
    paddingHorizontal: 85,
    borderRadius: 10,
    marginVertical: 10,
  },
  button2: {
    paddingVertical: 12,
    paddingHorizontal: 85,
    borderRadius: 10,
    borderColor: "#38BDF8",
    borderWidth: 2,
  },
  buttonText1: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  buttonText2: {
    color: "#38BDF8",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
});
