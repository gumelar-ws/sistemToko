import React, { useEffect, useState } from 'react';
import { api } from '../app/actions';
import XpdcBaner from '../components/navbarComponent/XpdcBaner';
import QuoteCaroselProduct from '../components/quoteCaroselComponent/QuoteCaroselProduct';
import LineText from '../components/lineText/LineText';
import Products from '../components/products/Products';
import Category from '../components/products/Category';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [key, setKey] = useState([]);
  const [cat, setCat] = useState(49);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const featuredFetch = async () => {
      const respon = await api.get('/categories');

      setKey(respon.data.aaData.map((v) => v.keyword_id));
    };

    data();
    featuredFetch();
    const savedIndex = localStorage.getItem('currentIndex');
    if (savedIndex) {
      setCurrentIndex(parseInt(savedIndex, 10));
    }
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (key.length > 0) {
        setCat(key[currentIndex]);
        if (currentIndex === key.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      }
    }, 50000);

    localStorage.setItem('currentIndex', currentIndex.toString());

    return () => clearTimeout(timer);
  }, [currentIndex, key]);

  console.log(currentIndex);
  console.log('cat', cat);

  const f = products.filter((v) => v.keywords[0].id === cat);
  console.log('f', f);
  useEffect(() => {
    const f = async () => {
      try {
        const res = await api.get(`/product?sorting=expensive&categories=${cat}`);
        setFeatured(res.data.aaData);
      } catch (error) {
        setError(error);
      }
    };
    f();
  }, [cat]);

  // const sortProductsByDate = (a, b) => new Date(b.childs[0].updated_at.date) - new Date(a.childs[0].updated_at.date);
  // const sortedProducts = [...products].sort(sortProductsByDate);

  return (
    <div>
      <XpdcBaner />
      <QuoteCaroselProduct />
      {loading ? (
        <p className="text-center">loading...</p>
      ) : error ? (
        <p className="text-center">{error.message}</p>
      ) : products && products.length ? (
        <>
          <Category products={products} />
          <LineText textLine="FEATURED PRODUCT" line="line" />
          <Products products={featured} number={0} />
          <LineText textLine="NEW ARIVAL" line="line" />
          <Products products={products} number={0} />
        </>
      ) : (
        ''
      )}
    </div>
  );
}
