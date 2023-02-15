import React from "react";
import {Route, Routes} from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";

// стили react для компонентов 
// Сверстать симпотные карточки (3 штуки на адптиве в колонку)
// 




// убрать либу и подключить свои стили (изолированно + scss)
// настроить роутинг
// сделать простую оплату (qr/lib)
// накатить редакс
// page speed
// сделать страницу, на ней переключалка (в виде таблици и в виде карточек), внутрь каждого можно проваливаться
// 

function App() {
  return(
    <Routes>
      <Route path="/" element={<ProductsPage />}/>
      <Route path="/about" element={<AboutPage />}/>
    </Routes>
  )
}

export default App;
