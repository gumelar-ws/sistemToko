import React, { useEffect, useState } from 'react';

import QuoteCaroselProduct from '../components/quoteCaroselComponent/QuoteCaroselProduct.jsx';
import ProductsComponent from '../components/products/ProductsComponent.jsx';
import LineText from '../components/lineText/LineText.jsx';
import CategoryProduct from '../components/categoriProduct/CategoryProduct.jsx';
import FooterBanerComponent from '../components/footer/FooterBanerComponent.jsx';
import XpdcBaner from '../components/navbarComponent/XpdcBaner.jsx';
import { api } from '../app/actions.js';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const response = await api.get('/product?page=1&sorting=Lates&categories=all&search_name=none');
        setProducts(response.data.aaData);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    return () => {
      fetchDataId();
    };
  }, []);

  const sortProductsByDate = (a, b) => new Date(b.childs[0].updated_at.date) - new Date(a.childs[0].updated_at.date);
  const sortedProducts = [...products].sort(sortProductsByDate);

  return (
    <div>
      <XpdcBaner />
      <QuoteCaroselProduct />
      <CategoryProduct products={products} loading={loading} error={error} />
      <LineText textLine="FEATURED PRODUCT" line="line" />
      <ProductsComponent products={sortedProducts} loading={loading} error={error} number={0} />
      <LineText textLine="NEW ARIVAL" line="line" />
      <ProductsComponent products={products} loading={loading} error={error} number={0} />
      <FooterBanerComponent />
    </div>
  );
}
//
