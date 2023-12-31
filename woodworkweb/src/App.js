import { Homepage } from "./components/homepage";
import { Header } from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import ContactUs from "./components/footer/contact-us";
import { About } from "./components/footer/about";
import GlobalStyles from "./utils/GlobalStyles";
import { Products } from "./components/products/products";
import { Faq } from "./components/footer/faq";
import { Accueil } from "./components/accueil";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/fr" element={<Accueil />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="" element={<h1>404: Oops!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
