import axios from "axios";
import React, { useEffect, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

import Product from "./components/Product";
import { IProduct } from "./models";
// import { products } from "./data/products";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function fetchData() {
    setLoading(true);
    setError("");
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        setLoading(false);
        setProducts(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ErrorBoundary>
      <div className="container mx-auto max-w-2xl pt-p">
        {loading && <div>Loading...</div>}

        {error && <div className='text-red-600 text-center'>error</div>}

        {products.length >= 1 &&
          products.map((product, index) => (
            <Product product={products[index]} key={product.id} />
          ))}
      </div>
    </ErrorBoundary>
  );
}

export default App;
