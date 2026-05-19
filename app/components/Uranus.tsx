import Planet from "./Planet";

export default function Uranus() {
  return (
    <Planet
      source={require("../planet_imgs/Uranus.png")}
      duration={17000}
      tilt="98deg"
    />
  );
}
