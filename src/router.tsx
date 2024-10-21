import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
  // Je définis une route sur l'url `/` qui affiche le composant `<Home />`
  {
    path: '/',
    // element: <Home />,
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />, // Page Home
      },
    ],
  },
]);

export default router;
