import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './components/HomePage/HomePage';

const router = createBrowserRouter([
  // Je définis une route sur l'url `/` qui affiche le composant `<HomePage />`
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
