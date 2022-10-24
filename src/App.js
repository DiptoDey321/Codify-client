import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout></Layout>,
      children : [

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
