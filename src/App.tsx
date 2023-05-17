import { Route, Routes } from "react-router-dom";
import { Header, Sprite } from "./components";
import { ProductsPage, BasketPage, ProductPage } from "./pages";

// TODO: инфа на отдельной странице с товаром
// TODO: оптимизировать логику с локальным хранилищем (если уже есть - не отправляем запрос)
// TODO: refact ts (remove any}
// TODO: classnames (достать функцией)
// TODO: "уверены, что хотите удалить?" попап ?
// TODO: fav
// TODO: анимация для кнопочки
// TODO: заглушки для карточек во время загрузки
// TODO: уменьшить картинки (те, что приходят с бэка)
// TODO: add webp 
// TODO: авторизация (на моках?) 

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

      {/* TODO: maybe use without component */}
      <Sprite />

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
