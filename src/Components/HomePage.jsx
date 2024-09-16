import { Link } from 'react-router-dom';

export const HomePage = () => (
  <nav>
    <h1>Главная страница</h1>
    <ul>
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
);