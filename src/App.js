import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout></Layout>,
      children : [
        {
          path: '/',
          element:<Home></Home>
        }
      ]
    }
  ])
  return (
    <div className="bg-[#f8f8f8]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
