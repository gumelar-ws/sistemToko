import { Route, Routes, useLocation } from 'react-router-dom';

import NavbarComponent from './components/navbarComponent/NavbarComponent.jsx';
import FooterComponent from './components/footer/FooterComponent.jsx';
import Home from './screen/Home.jsx';
import ProductList from './components/componentProductList/ProductList.jsx';
import Detail from './screen/Detail.jsx';
import Cart from './screen/Cart.jsx';
import Checkout from './screen/Checkout.jsx';
import CompletePayment from './screen/CompletePayment.jsx';

const App = () => {
  const location = useLocation();

  const isShoppingCartPage = location.pathname === '/product/shopingCart' || location.pathname === '/product/checkout-detail';

  return (
    <div className=" overflow-hidden pe-0 me-0 ">
      <header>
        <NavbarComponent total={isShoppingCartPage ? '/ Rp.200.000' : undefined} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/product/:sorting/:categories/:search_name" element={<ProductList />} />
          <Route path="/product/:name" element={<Detail />} />
          <Route path="/product/shoppingCart" element={<Cart />} />
          <Route path="/product/checkout-detail" element={<Checkout />} />
          <Route path="/product/payment-complite" element={<CompletePayment />} />
        </Routes>
      </main>
      <footer className="p-4">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default App;
