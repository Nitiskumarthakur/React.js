import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./componets/Navbar";
import { ToastContainer,Bounce  } from 'react-toastify';


export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white  overflow-clip">

      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

    </div>
  )
}
