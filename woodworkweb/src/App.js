import { Homepage } from "./components/homepage";
import { Header } from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import ContactUs from "./components/footer/contact-us";
import AboutUs from "./components/footer/about-us";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="" element={<h1>404: Oops!</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
