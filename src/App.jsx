import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmergencyGuide from "./pages/EmergencyGuide";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Map from "./pages/Map";
import DistressForm from "./components/DistressForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergency-guide" element={<EmergencyGuide />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/map" element={<Map />} />
        <Route path="/distress-form" element={<DistressForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;