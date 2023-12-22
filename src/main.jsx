import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login';
import SignUp from './Pages/Home/SignUp';
import AuthProvider from './Config/AuthProvider';
import Feature from './Pages/Features/Feature';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import Task from './Pages/DashboardRoutes/Task';
import User from './Pages/DashboardRoutes/User';
import AddTask from './Pages/DashboardRoutes/AddTask';
import TaskUpdate from './Pages/DashboardRoutes/TaskUpdate';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/features',
        element: <Feature></Feature>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
      
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'task',
        element: <Task></Task>
      },
      {
        path: 'user',
        element: <User></User>
      },
      {
        path: 'addTask',
        element: <AddTask></AddTask>
      },
      {
        path: '/dashboard/updateTask/:_id',
        element: <TaskUpdate></TaskUpdate>,
        
      }
    ]
  }
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <AuthProvider>
      <div className='max-w-7xl mx-auto mt-2'>
    <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
  
)
