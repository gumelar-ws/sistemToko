import { Route, Routes, useLocation } from 'react-router-dom';

import NavbarComponent from './components/navbarComponent/NavbarComponent.jsx';
import FooterComponent from './components/footer/FooterComponent.jsx';
import Detail from './screen/Detail.jsx';
import Cart from './screen/Cart.jsx';
import Checkout from './screen/Checkout.jsx';
import CompletePayment from './screen/CompletePayment.jsx';
import ProdouctsList from './screen/ProdouctsList.jsx';
import Home from './screen/Home.jsx';
import About from './screen/about/About.jsx';
import NotFound from './screen/NotFound.jsx';
import { useEffect, useState } from 'react';
import { api } from './app/actions.js';
import Faq from './screen/help/Faq.jsx';
import CaraPembelian from './screen/help/CaraPembelian.jsx';
import KonfirmasiPembayaran from './screen/help/KonfirmasiPembayaran.jsx';
import SyaratDanKetentuan from './screen/about/SyaratDanKetentuan.jsx';

const App = () => {
  const location = useLocation();
  window.scrollTo({ top: 0 });

  const [config, setConfig] = useState({});
  const [user, setUser] = useState({});
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const fetchWeb = async () => {
      try {
        const res = await api.get('/website');
        const response = await res.data;

        setConfig(response.data.config);
        setUser(response.data.user);
        setPages(response.data.pages);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    return () => {
      fetchWeb();
    };
  }, []);

  const totals = JSON.parse(localStorage.getItem('total'));

  const isShoppingCartPage = location.pathname === '/product/shoppingCart' || location.pathname === '/product/checkout-detail';

  return (
    <div className=" overflow-hidden pe-0 me-0 ">
      <header>
        <NavbarComponent total={isShoppingCartPage ? `Rp${totals}` : undefined} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/product/:sorting/:categories/:search_name" element={<ProdouctsList />} />
          <Route path="/product/:name" element={<Detail />} />
          <Route path="/product/shoppingCart" element={<Cart />} />
          <Route path="/product/checkout-detail" element={<Checkout />} />
          <Route path="/product/payment-complite" element={<CompletePayment />} />
          <Route path="/hijja/about" element={<About page={pages} />} />
          <Route path="/hijja/faq" element={<Faq page={pages} />} />
          <Route path="/hijja/caraPembelian" element={<CaraPembelian page={pages} />} />
          <Route path="/hijja/konfirmasiPembayaran" element={<KonfirmasiPembayaran page={pages} />} />
          <Route path="/hijja/syaratDanKetentuan" element={<SyaratDanKetentuan page={pages} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="p-4">
        <FooterComponent config={config} user={user} />
      </footer>
    </div>
  );
};

export default App;
