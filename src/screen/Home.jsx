import React, { useEffect, useState } from 'react';
import { api } from '../app/actions';
import XpdcBaner from '../components/navbarComponent/XpdcBaner';
import QuoteCaroselProduct from '../components/quoteCaroselComponent/QuoteCaroselProduct';
import LineText from '../components/lineText/LineText';
import Products from '../components/products/Products';
import Category from '../components/products/Category';

export default function Home() {
  window.scrollTo({ top: 0 });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const data = async () => {
      try {
        const res = await api.get('/product');
        setProducts(res.data.aaData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    return () => {
      data();
    };
  }, []);

  const sortProductsByDate = (a, b) => new Date(b.childs[0].updated_at.date) - new Date(a.childs[0].updated_at.date);
  const sortedProducts = [...products].sort(sortProductsByDate);

  return (
    <div>
      <XpdcBaner />
      <QuoteCaroselProduct />
      {loading ? (
        <p className="text-center">loading...</p>
      ) : error ? (
        <p className="text-center">{error.message}</p>
      ) : products ? (
        <>
          <Category products={products} />
          <LineText textLine="FEATURED PRODUCT" line="line" />
          <Products products={sortedProducts} number={0} />
          <LineText textLine="NEW ARIVAL" line="line" />
          <Products products={products} number={0} />
        </>
      ) : (
        ''
      )}
    </div>
  );
}
