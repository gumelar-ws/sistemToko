import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../app/actions';
import LineText from '../lineText/LineText';
import { useNavigate, useParams } from 'react-router-dom';
import DetaileImage from './childs/DetaileImage';
import RelateProduct from './childs/RelateProduct';
import LoadingPage from '../loadingBox/LoadingPage';
import LoadingButton from '../loadingBox/LoadingButton';

export default function DetailComponent() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [detailProduct, setDetailProduct] = useState([]);
  const [detailProductParent, setDetailProductParent] = useState({});
  const [detailProductChilds, setDetailProductChilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDataId = async () => {
      try {
        const response = await api.get(`/product?search_name=${name}`);
        setDetailProduct(response.data.aaData);
        setDetailProductParent(response.data.aaData[0]);
        setDetailProductChilds(response.data.aaData[0].childs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDataId();
  }, [name]);

  const scrollTop = () => {
    const offset = 90;
    window.scrollTo({ top: offset });
  };

  const [selectedId, setSelectedId] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setSelectedProduct(detailProductParent);
    if (detailProductParent.stock === 0) {
      setCount(0);
    } else {
      setCount(1);
    }
  }, [detailProductParent]);
  const handleSelectChange = (event) => {
    const id = event.target.value;

    setSelectedId(id);
    getProductDetails(id);
  };

  const getProductDetails = (id) => {
    const parentProduct = detailProduct.find((item) => item.id.toString() === id);

    if (parentProduct) {
      setSelectedProduct(parentProduct);
      if (parentProduct.stock === 0) {
        setCount(0);
      } else {
        setCount(1);
      }
      return;
    }
    const childProduct = detailProductChilds.find((item) => item.id.toString() === id);
    if (childProduct) {
      setSelectedProduct(childProduct);
      if (childProduct.stock === 0) {
        setCount(0);
      } else {
        setCount(1);
      }
    }
  };

  const handleCountChange = (item, action) => {
    if (action === 'decrease') {
      if (count > 1) {
        setCount(count - 1);
      }
    } else if (action === 'increase') {
      if (count < item.stock) {
        setCount(count + 1);
      }
    }
  };

  const cart = useSelector((state) => state.cart.cart);

  const handleAddToCart = async () => {
    setLoadingBtn(true);
    const existItem = cart.cartItems.find((x) => x.product_id === selectedProduct.id);
    const product_qty = existItem ? existItem.product_qty + count : 1;
    const newData = {
      product_id: selectedProduct.id,
      product_name: selectedProduct.name,
      product_image: selectedProduct.photo,
      product_price: selectedProduct.price,
      product_stock: selectedProduct.stock,
      product_weight: selectedProduct.weight,
    };
    if (selectedProduct.stock < product_qty) {
      window.alert('Sorry gays product habis !');
      setLoadingBtn(false);
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...newData, product_qty } });

    navigate('/product/shoppingCart');
  };

  const [relatedProducts, setRelatedProducts] = useState([]);
  const arr = detailProduct.map((dat) => dat.keywords.map((key) => key.id));

  const selectedKeywordId = parseInt(arr[0]);
  useEffect(() => {
    const fetchMetchData = async () => {
      const response = await api.get(`/product?categories=${selectedKeywordId}`);
      setRelatedProducts(response.data.aaData);
    };
    fetchMetchData();
  }, [selectedKeywordId]);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : error ? (
        <p className="text-center">Error: {error.message}</p>
      ) : (
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <DetaileImage detailProduct={detailProduct} detailProductChilds={detailProductChilds} />
              </div>
              {/* Detail description Product */}
              <div className="col-md-6">
                <div className="product-details">
                  {selectedProduct && (
                    <>
                      <h2>{selectedProduct.name}</h2>
                      <p className="fw-bold">
                        {selectedProduct.currency} {selectedProduct.price}
                      </p>
                      <p>Stock: {selectedProduct.stock}</p>
                    </>
                  )}
                  <div>
                    <p className="fw-bold mt-3">Size</p>
                    {selectedProduct && (
                      <select className="mb-3 ps-1 pe-1" style={{ width: '200px' }} value={selectedId !== '' ? selectedId : 'Choose Size'} onChange={handleSelectChange}>
                        {detailProduct.map((val) => (
                          <option key={val.id} value={val.id}>
                            {val.plain_varian[0].value}
                          </option>
                        ))}
                        {detailProductChilds.map((val) => (
                          <option key={val.id} value={val.id}>
                            {val.plain_varian[0].value}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>

                  <div className="row ">
                    <div className="col">
                      {' '}
                      {selectedProduct && (
                        <div>
                          <div className="me-5  w-100 d-flex h-auto ">
                            <ul className="pagination pagination-md">
                              <li className="page-item ">
                                <span className="page-link text-dark rounded-0 " style={{ cursor: 'pointer' }} onClick={() => handleCountChange(selectedProduct, 'decrease')}>
                                  -
                                </span>
                              </li>
                              <li className="page-item">
                                <span className="page-link text-dark rounded-0 ">{count}</span>
                              </li>
                              <li className="page-item me-5 ">
                                <span className="page-link text-dark rounded-0 " style={{ cursor: 'pointer' }} onClick={() => handleCountChange(selectedProduct, 'increase')}>
                                  +
                                </span>
                              </li>
                              <li className="page-item">
                                <span className="page-link btn btn-secondary bg-secondary text-white rounded-0 " style={{ cursor: 'pointer' }} onClick={handleAddToCart}>
                                  Add to Cart{loadingBtn ? <LoadingButton /> : ''}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="d-flex mb-0">
                      <p className="me-3  p-0  border-bottom border-2 border-dark">DESCRIPTION</p>
                      <div>SIZE GUID</div>
                    </div>
                    {selectedProduct && <p className=" "> {selectedProduct.description}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* related product */}
          <LineText textLine="related product" line="line-none" lineItemNone="line-item-none" />
          <div className="container">
            <div className="related-products">
              <h5 className="text-center">RELATED PRODUCTS</h5>
              <div className="row  ">
                <RelateProduct relatedProducts={relatedProducts} scrollTop={scrollTop} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  // return <h1>hallo</h1>;
}
