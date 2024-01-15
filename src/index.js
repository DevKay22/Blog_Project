import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/Errorpage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import UserProfile from './pages/UserProfile';
import CategoryPost from './pages/CategoryPost';
import EditPost from './pages/EditPost';
import AuthorPost from './pages/AuthorPost';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Authors from './pages/Authors';
import CreatePost from './pages/CreatePost';
import Logout from './pages/Logout';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />}, 
      {path: "post/:id", element: <PostDetail/>},
      {path: "profile/:id", element: <UserProfile/>},
      {path: "post/categories/:category", element: <CategoryPost/>},
      {path: "post/:id/edit", element: <EditPost/>},
      {path: "profile/:id", element: <AuthorPost/>},
      {path: "myposts/:id", element: <Dashboard/>},
      {path: "register", element: <Register/>},
      {path: "login", element: <Login/>},
      {path: "authors", element: <Authors/>},
      {path: "create", element: <CreatePost/>},
      {path: "logout", element: <Logout/>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


