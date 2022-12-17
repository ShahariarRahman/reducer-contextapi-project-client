
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
