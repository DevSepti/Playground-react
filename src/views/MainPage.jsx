import { Link } from 'react-router-dom';

const ROUTES = [
  { path: '/example', title: 'Example page' },
  { path: 'meal', title: 'Meal page' },
];

function MainPage() {
  return (
    <div>
      <h1>My App</h1>

      <ul>
        {ROUTES.map(({ path, title }) => (
          <li key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
