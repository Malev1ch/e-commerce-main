import React, { createContext, useState, useEffect } from 'react';
import { api } from "../api/axios.api";

const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await api.get("/products");
        const categoriesResponse = await api.get("/products/categories");

        setItems(productsResponse.data.products || []);
        setCategories(categoriesResponse.data.categories || []);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ items, categories }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;