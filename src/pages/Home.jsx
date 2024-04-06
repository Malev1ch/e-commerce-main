import React, { useContext } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Home.css";
import Product from "../components/Product";
import ProductsContext from "../context/ProductContext";
import { AuthContext } from "../context/AuthContext";
import Button from "@mui/material/Button";

const Home = () => {
  const { items, categories } = useContext(ProductsContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    navigate(`/?category=${selectedValue}`);
  };

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <Button onClick={logout} variant="contained">Выйти</Button>
      <div className="categories">
        <label htmlFor="categorySelect">Filter: </label>
        <select
          id="categorySelect"
          onChange={handleCategoryChange}
          value={selectedCategory || ""}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="products">
        {items
          .filter(
            (item) => !selectedCategory || item.category === selectedCategory
          )
          .map((item) => (
            <Product key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Home;
