import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import { BrowserRouter as Router } from "react-router-dom";
import data from "./data/data.json";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offers={data.offer} />
      <Heading text={"STAR PRODUCTS"} />
      <Heading text={"STAR"} />
      <Heading text={" PRODUCTS"} />
    </Router>
  );
}

export default App;
