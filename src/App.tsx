
import { Header, Routing, Sprite } from "./components";

// TODO: пересчитывать оставшееся кол-во

// TODO: каунтер в ui компонент

// TODO: дизейблить каунтер, если товаров не осталось на складе

// TODO: при добавлении с главной сделать вот такую штуку 9эля этого нужно каунтер вынести отдельно

// TODO: HOC

// TODO: инфа на отдельной странице с товаром
  // добавить поля (+ в мок тоже)
  // после заливки выводить

// TODO: "уверены, что хотите удалить?" попап ? 
  // Сделать в корне проекта, выводить при помощи redux (передавать сост-е и текст (что типа uPopup на КА))

// TODO: 404 page css

// TODO: fav
// TODO: рейтинг
// TODO: заглушки для карточек во время загрузки
// TODO: уменьшить картинки (те, что приходят с бэка) + add webp 

// TODO: авторизация (на моках?); 
  // firebase
  // OR
  // написать свой аля бэк (хотя бы мок, в идеале бахнуть что-то подобное https://youtu.be/H2GCkRF9eko - можно скопироваьт из его репы и править по возможности)

// TODO: refact ts (remove any}

// TODO: сделать бд на вордпересе и сделать лоремные новости (?)

// !!!!!! ОПТИМИЗАЦИЯ (держим 80+ lighthouse)

// REDUX
// переписать на тулкит (или сделать 2 варианта в отдельных ветках)

// DATA
// 

// REFACTOR
// lazy loading на всю карточку, чтобы повысить LCP

// ПРИКОЛЫ
// добавить категории (они приходят) - типа как на ВБ 9меню слева)
// super duper shop

// --------------------------------------- dirty --------------------------------------------------
// воткнуть перевод i18n
// сделать простую оплату (qr/lib)
// можно еще захуярить смену тем (тепно-зеленая и розовая, например)


// настройка вебпака

// сделать типа анлог новостей с бесконечной прокруткой (тырить со стороннего апи)
// можно еще добавить эмоджи-реакции с поппером (раз уж есть) - либо сделать отдельный пэт с этим (мб на чистом js)

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
