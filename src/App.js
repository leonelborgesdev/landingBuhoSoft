import { LandingHeader } from "./components/LandingHeader/LandingHeader";
import { Nav } from "./components/Nav/Nav";
import "./App.css";
import { OurServices } from "./components/OurServices/OurServices";
import { WhoWeAre } from "./components/WhoWeAre/WhoWeAre";
import { HowCanWeHelp } from "./components/HowCanWeHelp/HowCanWeHelp";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingHeader />
      <OurServices />
      <WhoWeAre />
      <HowCanWeHelp />
    </div>
  );
}

export default App;
