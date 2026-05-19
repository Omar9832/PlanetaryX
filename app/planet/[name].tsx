import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Params = {
  name?: string;
  gravity?: string;
  color?: string;
};

export default function PlanetScreen() {
  const router = useRouter();
  const { name, gravity, color } = useLocalSearchParams<Params>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <View style={[styles.circle, { backgroundColor: color || "#555" }]} />
      <Text style={styles.name}>{name || "Unknown Planet"}</Text>
      <Text style={styles.gravity}>Gravity: {gravity || "Unknown"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0E1B",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  back: {
    alignSelf: "flex-start",
    fontSize: 18,
    color: "#38BDF8",
    marginBottom: 20,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
  },
  name: {
    fontSize: 36,
    fontWeight: "800",
    color: "white",
  },
  gravity: {
    fontSize: 18,
    color: "#9CA3AF",
    marginTop: 10,
  },
});


