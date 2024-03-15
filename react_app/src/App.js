import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { BestWines } from "./Components/Best-Wines/Best-Wines";
function App() {
  return (
    <div>
      <Navbar />
      <BestWines />
      <Footer />
    </div>
  );
}

export default App;
