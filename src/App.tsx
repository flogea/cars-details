import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { DetailsPage } from './pages/DetailsPage';
import { CarsPage } from './pages/CarsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: 'cars',
    element: <CarsPage />
  },
  {
    path: 'details',
    element: <DetailsPage />
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
