import Planet from "./Planet";

export default function Venus() {
  return (
    <Planet
      source={require("../planet_imgs/Venus.png")}
      duration={30000}
      reverse
    />
  );
}
