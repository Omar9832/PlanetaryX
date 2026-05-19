import React, { useEffect, useRef } from "react";
import { Animated, ImageSourcePropType, StyleSheet } from "react-native";

interface PlanetProps {
  source: ImageSourcePropType;
  duration: number;
  tilt?: string;
  reverse?: boolean;
  size?: number;
}

const Planet: React.FC<PlanetProps> = ({
  source,
  duration,
  tilt = "0deg",
  reverse = false,
  size = 180,
}) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      })
    );
    anim.start();
    return () => anim.stop();
  }, [spinValue, duration]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: reverse ? ["360deg", "0deg"] : ["0deg", "360deg"],
  });

  return (
    <Animated.Image
      source={source}
      resizeMode="contain"
      style={[
        styles.planet,
        {
          width: size,
          height: size,
          transform: [{ rotate: tilt }, { rotate: spin }],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  planet: {
    alignSelf: "center",
  },
});

export default Planet;
