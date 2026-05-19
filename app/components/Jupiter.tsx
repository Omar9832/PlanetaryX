import Planet from "./Planet";

export default function Jupiter() {
  return (
    <Planet
      source={require("../planet_imgs/Jupiter.jpg")}
      duration={7000}
    />
  );
}
