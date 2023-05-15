import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { ProductsPage, BasketPage, ProductPage } from "./pages";

// TODO: нормально переверстать краточки в корзинке (или сделать отдельную)
// TODO: refact ts (remove any}
// TODO: сохранять сост-е при перезагрузке (localStorage) https://medium.com/nuances-of-programming/5-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2-%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%BF%D1%80%D0%BE%D0%BC%D0%B5%D0%B6%D1%83%D1%82%D0%BA%D0%B0%D1%85-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%BF%D0%B5%D1%80%D0%B5%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0%D0%BC%D0%B8-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86-%D0%B2-react-aa996a685e7
// TODO: classnames (достать функцией)
// TODO: "уверены, что хотите удалить?" попап ? 

// ОПТИМИЗАЦИЯ (держим 80+ lighthouse)

// REDUX
// переписать на тулкит (или сделать 2 варианта в отдельных ветках)

// TS
// избавиться от any везде (в тестовом пофиксили - см 1 из последних коммитов )

// DATA
// написать свой аля бэк (хотя бы мок, в идеале бахнуть что-то подобное https://youtu.be/H2GCkRF9eko - можно скопироваьт из его репы и править по возможности)

// REFACTOR
// вынести роутинг отдельно
// lazy loading на всю карточку, чтобы повысить LCP
// какой-то заполнитель для главной, пока данные не пришли - иначе скачет CLS сильно :(
// когда картинка грузится - не показывать серый фон - только разводы 

// ПРИКОЛЫ
// добавить категории (они приходят) - типа как на ВБ 9меню слева)
// super duper shop

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
