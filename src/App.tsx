import React from "react";
import { Route, Routes } from 'react-router-dom';
import { AboutPage, ProductsPage } from "./pages";

// + стили react для компонентов 
// + fx imports
// рейтинг в отдельный компонент и разные цвета
// Сверстать симпотные карточки (3 штуки на адптиве в колонку)
// воткнуть перевод 
// фавиконка

// сделать подгрузку карточек частями (или кнопка "Показать больше")
// оптимизация изображений (тоже отделенная загрузка какая-нибудь)
// react-skeleton 
// сделать переключалку на табличный вид и на сетку 

// убрать либу таилвига
// сделать простую оплату (qr/lib)
// накатить редакс
// page speed
// сделать страницу, на ней переключалка (в виде таблици и в виде карточек), внутрь каждого можно проваливаться
// 

function App() {
  return (
    <React.Fragment>
      <div>header</div>
      <div className="container">
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      </div>
      <div>footer</div>
    </React.Fragment>
  );
}

export default App;
