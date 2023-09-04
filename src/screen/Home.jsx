import React, { useEffect, useState } from 'react';

import QuoteCaroselProduct from '../components/quoteCaroselComponent/QuoteCaroselProduct.jsx';
import ProductsComponent from '../components/products/ProductsComponent.jsx';
import LineText from '../components/lineText/LineText.jsx';
import CategoryProduct from '../components/categoriProduct/CategoryProduct.jsx';
import FooterBanerComponent from '../components/footer/FooterBanerComponent.jsx';
import XpdcBaner from '../components/navbarComponent/XpdcBaner.jsx';
import { api } from '../app/actions.js';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
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
      fetchData();
    };
  }, []);

  const sortProductsByDate = (a, b) => new Date(b.childs[0].updated_at.date) - new Date(a.childs[0].updated_at.date);
  const sortedProducts = [...products].sort(sortProductsByDate);

  console.log(sortedProducts);

  return (
    <div>
      <XpdcBaner />
      <QuoteCaroselProduct />
      {loading ? (
        <p className="text-center text-success">sedang memuat product...</p>
      ) : error ? (
        <p className="text-center text-danger">{error.message}</p>
      ) : !products && !sortedProducts ? (
        <p className="text-center text-danger">product tidak di temukan!</p>
      ) : (
        <>
          <CategoryProduct products={products} />
          <LineText textLine="FEATURED PRODUCT" line="line" />
          <ProductsComponent products={sortedProducts} number={0} />
          <LineText textLine="NEW ARIVAL" line="line" />
          <ProductsComponent products={products} number={0} />
        </>
      )}

      <FooterBanerComponent />
    </div>
  );
}
//
