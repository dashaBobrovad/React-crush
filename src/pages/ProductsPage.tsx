import React, { useState } from 'react';
import CreateProductForm from "../components/CreateProductForm";
import Error from "../components/Error";
import ErrorBoundary from "../components/ErrorBoundary";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Product from "../components/Product";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";

function ProductsPage() {
    const { loading, error, products, addProduct } = useProducts();
  const [isModal, setIsModal] = useState<boolean>(true);

  const createProductHandler = (product: IProduct) => {
    setIsModal(false);
    addProduct(product);
  };

  const onCloseModal = () =>{
    setIsModal(false);
  }

  const onOpenModal = () => {
    setIsModal(true)
  }
  return (
    <ErrorBoundary>
      <button type="button" className="py-2 px-4 border bg-yellow-400" onClick={onOpenModal}>create product</button>
      <div className="container mx-auto max-w-2xl pt-p">
        {loading && <Loader />}

        {error && <Error error={error} />}

        {products.length >= 1 &&
          products.map((product, index) => (
            <Product product={products[index]} key={product.id} />
          ))}

        {products.length === 0 && !loading && !error && <div>no data </div>}

        {isModal && (
          <Modal onClose={onCloseModal}>
            <CreateProductForm onCreate={createProductHandler} />
          </Modal>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default ProductsPage;