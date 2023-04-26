import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Header } from "./components";
import { TestPage, ProductsPage, BasketPage, ProductPage } from "./pages";


// ОПТИМИЗАЦИЯ (держим 80+ lighthouse)

// REDUX
// переписать на тулкит (или сделать 2 варианта в отдельных ветках)

// TS
// избавиться от any везде

// REFACTOR
// ! лэзи лоад для всех карточек
// добавить прелоадер к картинке, чтобы не было видно серый фон после окончательной загрузки 
// вынести роутинг отдельно 
// lazy loading на всю карточку, чтобы повысить LCP

// ПРИКОЛЫ
// добавить категории (они приходят) - типа как на ВБ 9меню слева)
// страница товара (+ "еще из этой категории" )
// lazy loading красивый (анимация градиента) + aspect ratio
// пагинация на главной (ускорит загрузку данных) - по обсерверу/пагинация по страницам 
// добавить сост-я, если данных нет, сост-е и loading (продукты на главной)
// header + burger on mobile
// заебашить свайпер в в карточках


// --------------------------------------- dirty --------------------------------------------------
// возможность ставить рейтинг + пересчитываем только на той карточке, где поменяли
// воткнуть перевод i18n
// сделать простую оплату (qr/lib)
// можно еще захуярить смену тем (тепно-зеленая и розовая, например)
// 404

// настройка вебпака

// сделать типа анлог новостей с бесконечной прокруткой (тырить со стороннего апи)
// можно еще добавить эмоджи-реакции с поппером (раз уж есть) - либо сделать отдельный пэт с этим (мб на чистом js)



function App() {
  return (
    <div className="site">
      <div className="site_content">
        <Header />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>

      <div className="footer">
        <div className="column">footer</div>
      </div>

    </div>
  );
}

export default App;
