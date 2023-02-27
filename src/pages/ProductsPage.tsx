import React, { useState } from 'react';
import { CreateProductForm, Error, ErrorBoundary, Loader, Modal, Product, ProductList } from "../components";
// import { useProducts } from "../data/hooks/products";
import { IProduct } from "../types/IProduct";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../data/asyncActions/products";
function ProductsPage() {
  // const { loading, error, products, addProduct } = useProducts();
  const [isModal, setIsModal] = useState<boolean>(false);

  const createProductHandler = (product: IProduct) => {
    setIsModal(false);
    // addProduct(product);
  };

  const onCloseModal = () => {
    setIsModal(false);
  };

  const onOpenModal = () => {
    setIsModal(true);
  };

  const dispatch = useDispatch();
  const reduxProducts = useSelector((state: any) => state.products.products);

  React.useEffect(() => {
    dispatch(fetchProducts());
    console.log(reduxProducts);
  }, []);
  // сейчас берем продукты из редакса - -не запрашиваем данные каждый раз; допистаь логику, чтобы лоадинги правильно работали - поместить в хук

  return (
    <ErrorBoundary>
      <button type="button" className="py-2 px-4 border bg-yellow-400" onClick={onOpenModal}>create product</button>
      <div className='block'>

        {/* {loading && <Loader />}

        {error && <Error error={error} />}

        {!loading && <ProductList products={reduxProducts} />} */}
        <ProductList products={reduxProducts} />
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