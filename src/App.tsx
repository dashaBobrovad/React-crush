import React from "react";
import {Route, Routes} from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";

// убрать либу и подключить свои стили (изолированно + scss)
// настроить роутинг
// сделать простую оплату (qr/lib)
// накатить редакс

function App() {
  return(
    <Routes>
<Route path="/" element={<ProductsPage />}/>
<Route path="/about" element={<AboutPage />}/>
    </Routes>
  )
}

export default App;
