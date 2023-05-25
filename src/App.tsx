
import { Header, Routing, Sprite } from "./components";

// TODO: заглушки для карточек во время загрузки
  // + главная
  // отдельно
  // в корзине

  // TODO: инфа на отдельной странице с товаром
  // Попап делать в корне проекта, выводить при помощи redux (передавать сост-е и текст (что типа uPopup на КА))

// TODO: HOC

// TODO: 404 page css

// TODO: refact ts (remove any}

// !!!!!! ОПТИМИЗАЦИЯ (держим 80+ lighthouse)

// REDUX
// переписать на тулкит (или сделать 2 варианта в отдельных ветках)


// --------------------------------------- dirty --------------------------------------------------
// воткнуть перевод i18n
// сделать простую оплату (qr/lib)

// настройка вебпака

function App() {
  return (
    <div className="site">
      {/* TODO: maybe use sprite without component */}
      <Sprite />

      <div className="site_content">
        <Header />
        <Routing />
      </div>

      <div className="footer">
        <div className="column">footer</div>
      </div>
    </div>
  );
}

export default App;
