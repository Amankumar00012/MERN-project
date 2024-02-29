import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav'
import Contact from './Compoment/Contact'
import Add from "./Compoment/AddProduct";
import Product from "./Compoment/Product";
import Logout from "./Compoment/Logout";
import Profile from "./Compoment/Profile";
import Update from "./Compoment/UpdateProduct";
import Nopage from "./Compoment/Nopage";
import './App.css';

function App() {
  return (
    <div className="App">
 
      
      <BrowserRouter>
      <Nav />
      <Routes>
    
        <Route path="/" element={<Profile />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update" element={<Update/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="*" element={<Nopage/>} />

      </Routes>
    
      </BrowserRouter>

    </div>

  );
}

export default App;
