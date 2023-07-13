import { Homepage } from "./components/homepage";
import { Header } from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer/footer";
function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/cart" element={<Cart itemFetching={itemFetching} />} />
        <Route path="/confirmation/:orderId" element={<Confirmation />} />
        <Route
          path="/checkout"
          element={<Checkout setCountItem={setCountItem} />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/items" element={<Items />} />
        <Route
          path="/items/:_id"
          element={<ItemDetails itemFetching={itemFetching} />}
        />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="" element={<h1>404: Oops!</h1>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
