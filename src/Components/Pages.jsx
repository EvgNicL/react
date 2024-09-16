import { loremIpsum } from 'lorem-ipsum';
import { Link } from 'react-router-dom';

const BuildPage = (index) => (
  <>
    <h2>Страница {index}</h2>
    <nav>
    <ul>
    <li>
        <Link to="/">Главная страница </Link>
      </li>
      <li>
        <Link to="/one">Страница первая</Link>
      </li>
      <li>
        <Link to="/two">Страница вторая</Link>
      </li>
      <li>
        <Link to="/three">Страница третья</Link>
      </li>

    </ul>
  </nav>
    <div>
      <h3>Страница {index}. Контент: </h3>
      <p>{ loremIpsum({ count: 5 })}</p> 
    </div>
  </>
);

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);
export const PageThree = () => BuildPage(3);