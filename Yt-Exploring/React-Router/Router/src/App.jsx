import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Home from './Home'
import Contacts from './Contacts';
import About from './About';
import Skills from './Skills';
import AppLayout from './Layout/AppLayout';
//import './App.css'


function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/contacts',
          element: <Contacts />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path:'/skills',
          element:<Skills/>
        }
      ]
    }
  ]);

  //Old Version Router implementation
  // const router  = createBrowserRouter(
  //   createRoutesFromElements(
  //      <>
  //         <Route path="/" element={<Home/>}/>
  //         <Route path="/About" element={<About/>}/>
  //         <Route path="/Contacts" element={<Contacts/>}/>
  //      </>
  //   )
  // );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App








