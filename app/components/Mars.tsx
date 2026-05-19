import Planet from "./Planet";

export default function Mars() {
  return (
    <Planet
      source={require("../planet_imgs/Mars.png")}
      duration={15000}
      tilt="-25deg"
    />
  );
}
