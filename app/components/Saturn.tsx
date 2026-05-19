import Planet from "./Planet";

export default function Saturn() {
  return (
    <Planet
      source={require("../planet_imgs/Saturn.png")}
      duration={8000}
      tilt="-26deg"
      size={220}
    />
  );
}
