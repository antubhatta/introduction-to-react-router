import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Posts from './Components/Posts/Posts.jsx'
import PostDetails from './Components/Postdetails/postdetails.jsx'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact/Contact.jsx'
import Users from './Components/Users/Users.jsx'
import Userdetails from './Components/UserDetails/Userdetails.jsx'
import ErrorPage from './Components/Errorpage/ErrorPage.jsx'
const router=createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: '/about',
        element:<About></About>
      },
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
       
        element:<Userdetails></Userdetails>
      },
      {
        path: '/posts',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }

    ]

  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
