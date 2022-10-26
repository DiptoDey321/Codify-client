import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Blog from './Pages/Blog/Blog';
import Course from './Pages/Courses/Course';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout></Layout>,
      children : [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: '/courses',
          element:<Course></Course>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        }
      ]
    },
    {
      path: '/login',
      element:<Login></Login>
    },
    {
      path: '/register',
      element:<Register></Register>
    }
  ])
  return (
    <div className="bg-[#f8f8f8]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
