import React, { useState } from 'react';
import {CreateProductForm, Error, ErrorBoundary, Loader, Modal, Product, ProductList} from "../components";
import { useProducts } from "../hooks/products";
import { IProduct } from "../types/IProduct";

function ProductsPage() {
  const { loading, error, products, addProduct } = useProducts();
  const [isModal, setIsModal] = useState<boolean>(false);

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
      <div className='block'>
        {loading && <Loader />}

        {error && <Error error={error} />}

        {!loading && <ProductList products={products}/>}

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