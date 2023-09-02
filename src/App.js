import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import NavbarComponent from './components/navbarComponent/NavbarComponent.jsx';
import FooterComponent from './components/footer/FooterComponent.jsx';
import ProductListPage from './pages/ProductListPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import ShoppingCartPage from './pages/ShoppingCartPage.jsx';
import CheckoutDetailPge from './pages/CheckoutDetailPge.jsx';
import PaymentCompletePage from './pages/PaymentCompletePage.jsx';

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
          <Route path="/" element={<HomePage />} exact />
          <Route path="/product/:sorting/:categories/:search_name" element={<ProductListPage />} />
          <Route path="/product/:name" element={<ProductDetailPage />} />
          <Route path="/product/shoppingCart" element={<ShoppingCartPage />} />
          <Route path="/product/checkout-detail" element={<CheckoutDetailPge />} />
          <Route path="/product/payment-complite" element={<PaymentCompletePage />} />
        </Routes>
      </main>
      <footer className="p-4">
        <FooterComponent />
      </footer>
    </div>
  );
};

export default App;
