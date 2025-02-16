import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layouts from './components/Layouts/Layouts.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Rewards from './components/Rewards/Rewards.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "rewards",
        element: <Rewards />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      {/* <App /> */}
    </RouterProvider>
  </StrictMode >,
)
