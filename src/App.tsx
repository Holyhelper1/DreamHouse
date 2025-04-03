import { AboutUs } from "./Components/About-us/About-us";
import { ArticlesAndTips } from "./Components/Articles-and-tips/Articles-and-tips";
import { Bestsellers } from "./Components/Bestsellers/Bestsellers";
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
      <ArticlesAndTips/>
    </>
  );
}

export default App;
