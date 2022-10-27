import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import PrivateRoute from './Layout/PrivateRoute/PrivateRoute';
import Blog from './Pages/Blog/Blog';
import CheckOut from './Pages/Checkout/CheckOut';
import CourseInfo from './Pages/CourseInfo/CourseInfo';
import Course from './Pages/Courses/Course';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFoundpage from './Pages/NotFoundpage/NotFoundpage';
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
          path: '/coursesinfo/:id',
          element:<CourseInfo></CourseInfo>
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        }
      ]
    },
    {
      path:'*',
      element : <NotFoundpage></NotFoundpage>
    }
   
  ])
  return (
    <div className="bg-[#f8f8f8]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
