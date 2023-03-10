import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary, Navigation, Preview } from "./components";
import { TestPage, ProductsPage } from "./pages";


// ОПТИМИЗАЦИЯ (держим 80+ lighthouse)
// lazy load img
// lazy import libs
// suspense
// кэширование (memo) + список товаров в локальное хранилище 

// REDUX
// типизация Redux
// переписываем данные на Redux (не все, а которые нужны глобально - иначе контекст)
// переписать на тулкит (или сделать 2 варианта в отдельных ветках)

// TS
// избавиться от any везде

// REFACTOR
// ! лэзи лоад для всех карточек
// добавить прелоадер к картинке, чтобы не было видно серый фон после окончательной загрузки 
// вынести роутинг отдельно 
// lazy loading на всю карточку, чтобы повысить LCP

// ПРИКОЛЫ
// lazy loading красивый (анимация градиента) + aspect ratio
// пагинация на главной (ускорит загрузку данных) - по обсерверу/пагинация по страницам 
// добавить сост-я, если данных нет, сост-е и loading (продукты на главной)
// header + burger on mobile
// заебашить свайпер в в карточках


// --------------------------------------- dirty --------------------------------------------------
// возможность ставить рейтинг + пересчитываем только на той карточке, где поменяли
// воткнуть перевод i18n
// замутить перевод (русский и английский)
// Редакс (пока что только запрос всех товаров) + почитать про санки и если нужно подключить тоже 
// добавить возможность оценивать товар (+ дальше если купили, уменьшать кол-во)
// правильно ли подключен и сипользуется fontawesome

// сделать подгрузку карточек частями (или кнопка "Показать больше")
// оптимизация изображений (тоже отделенная загрузка какая-нибудь)
// react-skeleton 
// сделать переключалку на табличный вид и на сетку 

// убрать либу таилвига
// сделать простую оплату (qr/lib)
// page speed
// сделать страницу, на ней переключалка (в виде таблици и в виде карточек), внутрь каждого можно проваливаться
// можно еще захуярить смену тем (тепно-зеленая и розовая, например)
// 404

// настройка вебпака

// сделать типа анлог новостей с бесконечной прокруткой (тырить со стороннего апи)
// можно еще добавить эмоджи-реакции с поппером (раз уж есть) - либо сделать отдельный пэт с этим (мб на чистом js)



function App() {
  console.log(process.env)
  return (
    <React.Fragment>
      <div> env
  {    process.env.REACT_APP_URL}
      </div>
      <ErrorBoundary>
          <div className="column">header<Navigation /></div>

          <Preview />
          {/* <div style={{ height: 600, background: 'grey' }}>prety head will be here</div> */}
          {/* вместо этого придумать красивую шапку 0 для lcp */}

          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>

        <div className="column">footer</div>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
