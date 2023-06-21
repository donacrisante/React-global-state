import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialState = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialState);

  const countLights = lights.reduce(
    (acc, light) => acc + (light.isOn === true ? 1 : 0), 0 );

  function handleToggle(id) {
    setLights(
      lights.map((light) =>
      light.id === id ? { ...light, isOn: !light.isOn } : light)
    );
  }

  function handleAllLightsOn() {
    setLights(
      lights.map((light) => (!light.isOn ? { ...light, isOn: true } : light))
      );
    }
  
    function handleAllLightsOff() {
      setLights(
        lights.map((light) => (light.isOn ? { ...light, isOn: false } : light))
      );
    }

  return (
    <Layout countLights={countLights}>
      <GlobalStyle />
      <Component 
      {...pageProps}
      lights={lights}
      onToggle={handleToggle}
      countLights={countLights}
      onAllLightsOn={handleAllLightsOn}
      onAllLightsOff={handleAllLightsOff}
       />
    </Layout>
  );
}
