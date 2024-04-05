import { LandingHeader } from "./components/LandingHeader/LandingHeader";
import { Nav } from "./components/Nav/Nav";
import "./App.css";
import { OurServices } from "./components/OurServices/OurServices";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingHeader />
      <OurServices />
    </div>
  );
}

export default App;
