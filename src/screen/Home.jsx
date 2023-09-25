import React, { useEffect, useState } from 'react';
import { api } from '../app/actions';
import XpdcBaner from '../components/navbarComponent/XpdcBaner';
import QuoteCaroselProduct from '../components/quoteCaroselComponent/QuoteCaroselProduct';
import LineText from '../components/lineText/LineText';
import Products from '../components/products/Products';
import Category from '../components/products/Category';
import LoadingPage from '../components/loadingBox/LoadingPage';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [key, setKey] = useState([]);
  const [cat, setCat] = useState(49);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productAll, setProductAll] = useState([]);
  const [categories, setCategories] = useState([]);
  const [perPage, setPerPage] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await api.get('/product');
        setProducts(res.data.aaData);
        setPerPage(res.data.per_page);
        setTotal(res.data.total);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    const featuredFetch = async () => {
      const respon = await api.get('/categories');
      setCategories(respon.data.aaData);

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
    const FetchProductAll = async () => {
      const totalPages = Math.ceil(total / perPage);
      const allProducts = [];

      for (let page = 1; page <= totalPages; page++) {
        try {
          const response = await api.get(`/product?page=${page}`);
          allProducts.push(...response.data.aaData);
        } catch (error) {
          console.error('Error fetching produk data:', error);
        }
      }

      setLoading(false);
      const produkTerpilih = categories.map((kategori) => {
        const produkKategori = allProducts.find((produk) => produk.keywords[0].id === kategori.keyword_id);
        return produkKategori;
      });

      setProductAll(produkTerpilih);
    };
    FetchProductAll();
  }, [perPage, total, categories]);

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

  // const f = products.filter((v) => v.keywords[0].id === cat);

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
  return (
    <div>
      <XpdcBaner />
      <QuoteCaroselProduct />
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <p className="text-center">{error.message}</p>
      ) : products && products.length ? (
        <>
          {!productAll || productAll[0] === undefined ? <LoadingPage /> : <Category products={productAll} />}
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
