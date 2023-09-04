import React, { useEffect, useState } from 'react';

import QuoteCaroselProduct from '../components/quoteCaroselComponent/QuoteCaroselProduct.jsx';
// import ProductsComponent from '../components/products/ProductsComponent.jsx';
// import LineText from '../components/lineText/LineText.jsx';
// import CategoryProduct from '../components/categoriProduct/CategoryProduct.jsx';
import FooterBanerComponent from '../components/footer/FooterBanerComponent.jsx';
import XpdcBaner from '../components/navbarComponent/XpdcBaner.jsx';
import { api } from '../app/actions';

export default function PageHome() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/product');
        setData(response.data.aaData);

        // setLoading(false);
      } catch (error) {
        // setError(error);
        // setLoading(false);
      }
    };
    return () => {
      fetchData();
    };
  }, []);

  // const sortProductsByDate = (a, b) => new Date(b.childs[0].updated_at.date) - new Date(a.childs[0].updated_at.date);
  // const sortedProducts = [...products].sort(sortProductsByDate);

  console.log(data);

  return (
    <div>
      <XpdcBaner />
      <QuoteCaroselProduct />
      <h1>
        update
        {data.map((dat) => (
          <p>{dat.name}</p>
        ))}
      </h1>
      {/* {loading ? (
        <p className="text-center text-success">sedang memuat product...</p>
      ) : error ? (
        <p className="text-center text-danger">{error.message}</p>
      ) : products ? (
        <div>
          <CategoryProduct products={products} />
          <LineText textLine="FEATURED PRODUCT" line="line" />
          <ProductsComponent products={sortedProducts} number={0} />
          <LineText textLine="NEW ARIVAL" line="line" />
          <ProductsComponent products={products} number={0} />
        </div>
      ) : !products && !sortedProducts ? (
        <p className="text-center text-danger">product tidak di temukan!</p>
      ) : (
        ''
      )} */}

      <FooterBanerComponent />
    </div>
  );
}
//
