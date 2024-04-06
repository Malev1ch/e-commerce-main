import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import ProductDetails from "./pages/ProductDetails";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ProductsProvider } from "./context/ProductContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <ProductsProvider>
          <Header />
          <Routes>
            <Route path="/register" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <ProtectedRoute>
                  <Contacts />
                </ProtectedRoute>
              }
            />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ProductsProvider>
      </AuthProvider>
    </div>
  );
}

export default App;