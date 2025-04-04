import { AboutUs } from "./Components/About-us/About-us";
import { ArticlesAndTips } from "./Components/Articles-and-tips/Articles-and-tips";
import { Bestsellers } from "./Components/Bestsellers/Bestsellers";
import { CustomersAboutUs } from "./Components/Customers-about-us/Customers-about-us";
import { FAQ } from "./Components/FAQ/FAQ";
import { Footer } from "./Components/Footer/Footer";
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
      <CustomersAboutUs/>
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
