import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/COntacts";
import Country from "./pages/Country";
import AppLayout from "./components/Layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import CountryDetails from "./components/UI/CountryDetails";

import Header from "./components/UI/Header";
function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
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
          path: "country/:id",
          element: <CountryDetails/>
        },
        {
          path: "country",
          element: <Country />
        }
      ]
    }

  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
