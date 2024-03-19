import { Cart } from './components/pages/cart';
import { Catalog } from './components/pages/catalog';
import { Home } from './components/pages/home';
import { Product } from './components/pages/product';
import { Registration } from './components/pages/registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          {/* <Route path="/product/" element={<Product />} /> */}
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
