import React, { useEffect, useState } from 'react';

import { api } from '../app/actions';
import ProductList from '../components/componentProductList/ProductList';
import { useNavigate, useParams } from 'react-router-dom';
import HederPathProductList from '../components/componentProductList/HederPathProductList';
import BtnViewMore from '../components/componentProductList/BtnViewMore.jsx';
import LoadingPage from '../components/loadingBox/LoadingPage';

export default function ProdouctsList() {
  const { sorting, categories, search_name } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [error, setError] = useState('');
  const [pages, setPages] = useState(1);
  const [prevSearchName, setPrevSearchName] = useState(search_name);
  const [hasMore, setHasMore] = useState(true);
  const [from, setfrom] = useState(0);
  const [to, setTo] = useState(0);
  const [total, setTotal] = useState(0);
  // const [sisa, setSisa] = useState(0);

  const loadProducts = async (pagesNumber, sort, categori, search) => {
    setIsLoadingMore(true);
    try {
      const response = await api.get(`/product?page=${pagesNumber}&sorting=${sort}&categories=${categori}&search_name=${search}`);
      const newProducts = response.data.aaData;

      setfrom(response.data.from);
      setTo(response.data.to);
      setTotal(response.data.total);

      if (newProducts.length === 0) {
        setHasMore(false);
      }
      // const sisaProduct = newProducts.length - total;
      // if (sisaProduct <= 0) {
      //   setHasMore(false);
      //   setSisa(0);
      // } else {
      //   setSisa(sisaProduct);
      // }

      if (pagesNumber > 1) {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      } else {
        setProducts(newProducts);
      }

      setLoading(false);

      setIsLoadingMore(false);
    } catch (error) {
      setError('Terjadi kesalahan saat memuat produk.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (search_name !== prevSearchName) {
      setPages(1);
      setPrevSearchName(search_name);
    }
    loadProducts(pages, sorting, categories, search_name);

    navigate(`/product/${sorting}/${categories}/${search_name}`);
  }, [pages, hasMore, sorting, categories, search_name, navigate, prevSearchName]);

  const loadMore = () => {
    setIsLoadingMore(true);
    setPages(pages + 1);
    setIsLoadingMore(false);
  };
  console.log(products);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <div>
          <HederPathProductList
            content1="HOME"
            content2="T-SHIRT COLLECTION"
            content3="T-SHIRT"
            to={to}
            from={from}
            setPages={setPages}
            total={total}
            value={sorting}
            categories={categories}
            search_name={search_name}
            content3Style="fw-bold"
            content4Style="d-none"
            content5Style="d-none"
          />
          {products ? <ProductList products={products} /> : <p className="text-danger text-center mt-3">Products Not Found!</p>}
          {hasMore && <BtnViewMore onClick={loadMore} isLoadingMore={isLoadingMore} />}
        </div>
      )}
    </div>
  );
}
