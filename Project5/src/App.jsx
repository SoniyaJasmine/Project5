import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import { WishlistProvider } from "./Context/WishlistContext";
import ScrollToTop from "./Components/ScrollToTop";


import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Wishlist from "./Pages/Wishlist";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";
import OrderPlaced from "./Pages/OrderPlaced";
import Weddingcard from "./Pages/Weddingcard";
import Cart from "./Pages/Cart";
import HinduWeddingCards from "./Pages/HinduWeddingCards";
import ChristianWeddingCards from "./Pages/ChristianWeddingCards";
import MuslimWeddingCards from "./Pages/MuslimWeddingCards";
import AboutUs from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import FAQ from "./Pages/FAQ";
import HowToOrder from "./Pages/HowToOrder";

function App() {
  return(
    <WishlistProvider>
        <CartProvider>

    <BrowserRouter>

      <ScrollToTop />


      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/search"
          element={<Search />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/product-details/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/orderplaced"
          element={<OrderPlaced />}
        />

        <Route
          path="/wedding-invitation"
          element={<Weddingcard />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/hindu-wedding-cards"
          element={<HinduWeddingCards />}
        />

        <Route
          path="/christian-wedding-cards"
          element={<ChristianWeddingCards />}
        />

        <Route
          path="/muslim-wedding-cards"
          element={<MuslimWeddingCards />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />

        <Route
          path="/contact"
          element={<ContactUs />}
        />

        <Route
          path="/faq"
          element={<FAQ />}
        />

        <Route
          path="/How-to-order"
          element={<HowToOrder />}
        />
      </Routes>


      <Footer />

    </BrowserRouter>
    </CartProvider>
    </WishlistProvider>
  );  
}

export default App;