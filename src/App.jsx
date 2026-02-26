import {Routes, Route} from "react-router-dom"
import Products from "./pages/products/Products.jsx"
import Home from "./pages/Home.jsx"
import AboutUs from "./pages/About.jsx"
import ContactUs from "./pages/Contact.jsx"


import { Toaster } from "react-hot-toast"

export default function App() {
  return( 
    <main className="bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>  
      <Toaster />
    </main>
  )
}