// app/home.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/* ---------- Types ---------- */
type Planet = {
  name: string;
  gravity: string;
  color: string;
};

/* ---------- Data ---------- */
const planets: Planet[] = [
  { name: "Mercury", gravity: "3.7 m/s²", color: "#9CA3AF" },
  { name: "Venus", gravity: "8.9 m/s²", color: "#F472B6" },
  { name: "Earth", gravity: "9.8 m/s²", color: "#38BDF8" },
  { name: "Mars", gravity: "3.7 m/s²", color: "#FB7185" },
  { name: "Jupiter", gravity: "24.8 m/s²", color: "#FACC15" },
  { name: "Saturn", gravity: "10.4 m/s²", color: "#FDE68A" },
  { name: "Uranus", gravity: "8.7 m/s²", color: "#67E8F9" },
  { name: "Neptune", gravity: "11.2 m/s²", color: "#6366F1" },
];


export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");


  // useEffect(() => {
   // const fetchEmail = async () => {

   //   try {
      // Get the logged-in user ID stored after login
     // const userId = await AsyncStorage.getItem('loggedInUserId');
    //  Alert.alert("Debug", `Stored userId: ${userId}`);
      //if (!userId) return;

      // Make GET request to backend
    //  const res = await fetch(`http://10.0.2.2:3000/users/${userId}`);
      //const data = await res.json();

     // if (res.ok) {
       // Alert.alert("Debug", `Fetched email: ${data.email}`);
       // const email_text=data.email
       // if (!email_text) {
        //  console.warn("Email missing in response!");
         // return;
         // }
        
       // const username= email_text.split("@")[0];
       
       // setUsername(username); 
     // } else {
       // Alert.alert("Email Not Received", data.error || "Unknown error");
     // }
   // } catch (err) {
    //  console.error("Fetch email error:", err);
     // Alert.alert("Error", "Cannot reach server. Make sure backend is running.");
   // }
  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const loggedInEmail = await AsyncStorage.getItem("loggedInUser");
        if (loggedInEmail) {
          const extractedUsername = loggedInEmail.split("@")[0];
          setUsername(extractedUsername);
        }
      } catch (err) {
        console.error("Fetch email error:", err);
        Alert.alert("Error", "Cannot reach server. Make sure backend is running.");
      }
    };

    fetchEmail();
  }, []);

  return (
    <View style={styles.container2}>
      <View style={styles.container1}>
        <Text style={styles.title1}>Welcome to</Text>
        <Text style={styles.title2}>PlanetaryX</Text>
        <Text style={styles.emailText}>{username}</Text>

        <Text style={styles.exploreText}>Explore Planets</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {/* Planets displayed without TouchableOpacity, so not clickable */}
          {planets.map((planet) => (
            <View key={planet.name} style={styles.planetCard}>
              <View
                style={[styles.planetCircle, { backgroundColor: planet.color }]}
              />
              <Text style={styles.planetName}>{planet.name}</Text>
              <Text style={styles.planetGravity}>{planet.gravity}</Text>
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.SettingButton}
          activeOpacity={0.8}
          onPress={() => router.push("/Settings")}
          
        >
          <Text style={styles.observeButtonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.subbutton}
          activeOpacity={0.8}
          onPress={() => router.push("/Subscriptions")}
        >
          <Text style={styles.subbuttontext}>Subscriptions</Text>
        </TouchableOpacity>

        {/* Button to navigate to full planets list */}
        <TouchableOpacity
          style={styles.observeButton}
          activeOpacity={0.8}
          onPress={() => router.push("/planets")}
          
        >
          <Text style={styles.observeButtonText}>Observe Planets</Text>
        </TouchableOpacity>

        
        
      </View>
    </View>
  );
}

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#1A1B33",
  },
  container1: {
    flex: 1,
    backgroundColor: "#16172B",
    borderWidth: 30,
    borderRadius: 50,
    borderColor: "#1A1B33",
    paddingBottom: 20,
  },
  title1: {
    marginTop: 50,
    marginLeft: 25,
    color: "#9CA3AF",
    fontSize: 18,
    fontWeight: "600",
  },
  title2: {
    marginLeft: 25,
    fontSize: 35,
    fontWeight: "800",
    color: "#38BDF8",
  },
  emailText: {
    marginLeft: 25,
    marginTop: 5,
    color: "#9CA3AF",
    fontSize: 14,
  },
  exploreText: {
    marginLeft: 25,
    marginTop: 40,
    fontSize: 25,
    fontWeight: "600",
    color: "white",
  },
  scrollContainer: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  planetCard: {
    width: 160,
    height: 220,
    backgroundColor: "#1A1B33",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#38BDF8",
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  planetCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 15,
  },
  planetName: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  planetGravity: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 6,
  },
  observeButton: {
    backgroundColor: "#38BDF8",
    marginHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  observeButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },

  subbutton: {
    backgroundColor: "#1030e6",
    marginHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  subbuttontext: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
  },

  SettingButton: {
    backgroundColor: "#d208fa",
    marginHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
});






function fetchEmail() {
  throw new Error("Function not implemented.");
}

