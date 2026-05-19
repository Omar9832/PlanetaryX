import Planet from "./Planet";

export default function Mercury() {
  return (
    <Planet
      source={require("../planet_imgs/Mercury.jpg")}
      duration={22000}
      tilt="0deg"
    />
  );
}
