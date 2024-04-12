import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { BestWines } from "./Components/Best-Wines/Best-Wines";
import { Introduction } from "./Components/Introduction/Introduction";
import { Description } from "./Components/Description/Description";
function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Description/>
      <BestWines />
      <Footer />
    </div>
  );
}

export default App;
