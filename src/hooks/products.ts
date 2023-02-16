import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../types/IProduct";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  function addProduct (product: IProduct){
    setProducts(prev => [product, ...prev]);
  }
  
  async function fetchData() {
    setLoading(true);
    setError("");
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setLoading(false);
        setProducts(response.data);
      })
      .catch((e: unknown) => {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, products, addProduct };
}
