import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import CarsPage from "./pages/CarsPage/CarsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { Footer } from "./components/Footer/Footer";
import CarPage from "./pages/CarPage/CarPage";
import ShippingPage from "./pages/ShippingPage/ShippingPage";
import WarrantyPage from "./pages/WarrantyPage/WarrantyPage";
import FinancingPage from "./pages/FinancingPage/FinancingPage";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/car/:id" element={<CarPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/warranty" element={<WarrantyPage />} />
          <Route path="/financing" element={<FinancingPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
