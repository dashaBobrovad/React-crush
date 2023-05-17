import { Route, Routes } from "react-router-dom";
import { ProductsPage, BasketPage, ProductPage, NotFoundPage } from "../../pages";

function Routing() {
    return (
    <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path='*' element={<NotFoundPage />}/>
    </Routes>
    
    );
  }
  
  export default Routing;
  