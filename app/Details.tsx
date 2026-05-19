
import { router } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const PLANETS: Record<
  string,
  { type: string; label: string; Gravity:string; Density:string; Iron:string; Oxygen:string; Silicon:string; Magnesium:string; Sulfur:string; Nickel:string; Water:string; Ice:string }
> = {
  earth: { type:"Planet", label:"Earth", Gravity:"9.8 m/s²", Density:"5.51 g/cm³", Iron:"32.1%", Oxygen:"46.6%", Silicon:"15.4%", Magnesium:"12.7%", Sulfur:"0.04%", Nickel:"5.8%", Water:"71%", Ice:"0%" },
  mars: { type:"Planet", label:"Mars", Gravity:"3.7 m/s²", Density:"3.93 g/cm³", Iron:"15.1%", Oxygen:"42.6%", Silicon:"20.9%", Magnesium:"8.2%", Sulfur:"0.04%", Nickel:"2.8%", Water:"0%", Ice:"0%", },
  venus: { type: "Planet", label: "Venus", Gravity: "8.87 m/s²", Density: "5.24 g/cm³", Iron: "32.1%", Oxygen: "46.6%", Silicon: "15.4%", Magnesium: "12.7%", Sulfur: "0.04%", Nickel: "5.8%", Water: "0%", Ice: "0%", },
  mercury: { type: "Planet", label: "Mercury", Gravity: "3.7 m/s²", Density: "5.43 g/cm³", Iron: "32.1%", Oxygen: "46.6%", Silicon: "15.4%", Magnesium: "12.7%", Sulfur: "0.04%", Nickel: "5.8%", Water:"0%", Ice:"0%", },
  jupiter: {type: "Planet", label: "Jupiter", Gravity: "24.79 m/s²", Density: "1.33 g/cm³", Iron: "32.1%", Oxygen: "46.6%", Silicon: "15.4%", Magnesium: "12.7%", Sulfur: "0.04%", Nickel: "5.8%", Water:"0%", Ice:"0%", },
  saturn: {type: "Planet", label: "Saturn", Gravity: "10.44 m/s²", Density: "0.69 g/cm³", Iron: "32.1%", Oxygen: "46.6%", Silicon: "15.4%", Magnesium: "12.7%", Sulfur: "0.04%", Nickel: "5.8%", Water:"0%", Ice:"0%", },
  uranus: { type: "Planet", label: "Uranus", Gravity: "8.69 m/s²", Density: "1.27 g/cm³", Iron: "32.1%", Oxygen: "46.6%", Silicon: "15.4%", Magnesium: "12.7%", Sulfur: "0.04%", Nickel: "5.8%", Water:"0%", Ice:"0%", },
};
export default function Details() {
  const [planetInput, setPlanetInput] = useState("");
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const [selectedPlanet, setSelectedPlanet] = useState("");
  React.useEffect(() => {
    if (message) {
      setSelectedPlanet(message.toLowerCase());
    }
  }, [message]);
  return (
    <View style={styles.container2}>
      <View style={styles.container1}>
        <View>
            <TouchableOpacity onPress={()=> router.push("/planets")}>
                <Text style={styles.backtext}>
                    ←Back
                </Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.planettext}>
            {message}
        </Text>
        <View style={styles.infobox}>
            <Text style={styles.infoheader}>
                Basic Information
            </Text>
            <View style={styles.inforow}>
                <Text style={styles.subtitles}>Type:</Text>
                <Text style={styles.statstext}>{PLANETS[selectedPlanet]?.type}</Text>
                
                
            </View>
            <View style={styles.inforow}>
                <Text style={styles.subtitles}>Gravity: </Text>
                <Text style={styles.statstext}>{PLANETS[selectedPlanet]?.Gravity}</Text>
            </View>
            <View style={styles.inforow}>
                <Text style={styles.subtitles}>Density: </Text>
                <Text style={styles.statstext}>{PLANETS[selectedPlanet]?.Density}</Text>
            </View>
        </View>
        <View style={styles.infobox}>
            <Text style={styles.infoheader}>
                Elemental Composition
            </Text>
            <View style={styles.inforow}>
                <Text style={styles.subtitles}>
                    Iron (fe):
                </Text>
                <Text style={styles.statstext}>{PLANETS[selectedPlanet]?.Iron}</Text>
            </View>
            <View style={styles.inforow}>
                <Text style={styles.subtitles}>
                    Oxygen (O):
                </Text>
                <Text style={styles.statstext}>{PLANETS[selectedPlanet]?.Oxygen}</Text>
            </View>
            <View style={styles.inforow}>
                <Text style={styles.subtitles}>
                    Silicon (Si):
                </Text>
                <Text style={styles.statstext}>{PLANETS[selectedPlanet]?.Silicon}</Text>
            </View>
        </View>
        <View style={styles.infobox}>
            <Text style={styles.infoheader}>
                Check Contents
            </Text>
            <View style={styles.inforow}>
                <Text style={styles.subtitles}>
                    Water Content:
                </Text>
                <Text style={styles.statstext}>{PLANETS[selectedPlanet]?.Water}</Text>
            </View>
            <View style={styles.inforow}>
                <Text style={styles.subtitles}>
                    Ice Content:
                </Text>
                <Text style={styles.statstext}>{PLANETS[selectedPlanet]?.Ice}</Text>
                
            </View>
            
        </View>
      </View>
    </View>
  );
}

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
    planettext: {
    fontSize: 30,
    color: "aqua",
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
  },
  backtext: {
    fontSize: 15,
    color: "aqua",
    fontWeight: "700",
    marginTop: 70,
    marginLeft: 20,
  },
  infobox: {
    backgroundColor: "#1A1B33",
    width: 330,
    height: 150,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "aqua",
    marginTop: 20,
    marginLeft: 20,
  },
  infoheader:{
    fontSize: 20,
    color: "white",
    fontWeight: "700",
    marginTop: 10,
    marginLeft: 10,
  },
  subtitles:{
    fontSize: 15,
    color: "#9CA3AF",
    fontWeight: "500",
    marginTop: 10,
    marginLeft: 10,
  },
  inforow:{
    flexDirection: "row",
  },
  statstext:{
    
    fontSize: 15,
    color: "white",
    fontWeight: "700",
    marginTop: 10,
    marginLeft: 10,
 
  }



});