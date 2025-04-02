import { AboutUs } from "./Components/about-us/About-us";
import { Bestsellers } from "./Components/bestsellers/Bestsellers";
import { Header } from "./Components/Header/Header";
import { HouseDream } from "./Components/House-dream/House-dream";
import { HowWeWork } from "./Components/How-we-work/How-we-work";

function App() {
  return (
    <>
      <Header />
      <HouseDream />
      <AboutUs />
      <Bestsellers />
      <HowWeWork />
    </>
  );
}

export default App;
