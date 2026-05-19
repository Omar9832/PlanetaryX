import Planet from "./Planet";

export default function Earth() {
  return (
    <Planet
      source={require("../planet_imgs/Earth.png")}
      duration={14000}
      tilt="-23.5deg"
    />
  );
}

