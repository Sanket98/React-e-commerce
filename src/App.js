import './App.css';
import './css/style.css';
// import './css/media.css';
import 'bootstrap/dist/css/bootstrap.css';

import "@fortawesome/free-regular-svg-icons"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

import Login from './components/Login';
import Signup from './components/Signup';
import Cart from './components/Cart';
import ProductPage from './components/ProductPage';
import Cart1 from './components/Cart1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes path="/" element={<Home />}>

          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product-page" element={<ProductPage />} />

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart1" element={<Cart1 />} />
       

        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
