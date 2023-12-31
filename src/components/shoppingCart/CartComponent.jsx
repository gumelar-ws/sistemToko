import React, { useEffect, useState } from 'react';
import './styleCart.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingButton from '../loadingBox/LoadingButton';

export default function CartComponent({ setTotals }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.cart.cartItems);
  const [subTotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [vocer, setVocer] = useState('');
  const [hemat, setHemat] = useState('');
  const [loading, setLoading] = useState(false);

  function formatNumberWithCommas(number) {
    return number.toLocaleString('id-ID');
  }
  function formatStringPrice(item) {
    return item.product_price.replace(/\./g, '');
  }

  let vocerPricePercentage = 0.21;
  let subTotalPrice = listCart.reduce((a, p) => {
    const x = parseInt(formatStringPrice(p)) * p.product_qty;
    return a + x;
  }, 0);

  useEffect(() => {
    setSubtotal(subTotalPrice);
    setTotal(subTotalPrice);
  }, [subTotalPrice]);

  useEffect(() => {
    setTotals(formatNumberWithCommas(total));
  }, [setTotals, total]);

  const handelVocer = (e) => {
    setVocer(e.target.value);
  };

  const handelAplay = () => {
    let discountPrice = 0;
    let discoun = 0;
    if (vocer === 'ABCD') {
      discountPrice = subTotalPrice * vocerPricePercentage;
      discoun = subTotalPrice - discountPrice;
      setHemat(`hemat ${vocerPricePercentage * 100}%`);

      setTotal(discoun);
    } else {
      setHemat('');
      setTotal(subTotalPrice);
    }
  };

  const updateCartHandler = async (item, product_qty) => {
    if (item.product_stock < product_qty) {
      window.alert('Sorry, Product is out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, product_qty } });
  };

  const removeCartHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  console.log('list cart', listCart);
  const handelCekout = () => {
    setLoading(true);
    navigate('/product/checkout-detail');
    setLoading(false);
  };
  return (
    <div>
      <div className="row parent ">
        <div className="col-lg-6  pb-sm-5  border-end border-3 ">
          <div className="pe-3">
            <div className="row border-bottom border-3 mb-3 pb-2">
              <div className="col fw-bold">PRODUCT</div>
              <div className="col-3 ms-3 fw-bold">QUANTITY</div>
              <div className="col-3 fw-bold">PRICE</div>
            </div>
          </div>
          <div className="pe-3">
            {!listCart || listCart.length === 0 ? (
              <p className="text-success">Tidak Ada Products yang di pilih!</p>
            ) : (
              listCart.map((list) => {
                const totalCount = formatNumberWithCommas(parseInt(formatStringPrice(list)) * list.product_qty);
                return (
                  <div key={list.product_id} className="row  d-flex align-items-center mb-3 pb-3 border-bottom border-2">
                    <div className="col text-truncate">
                      <span className="pe-1 ms-0" style={{ cursor: 'pointer' }} onClick={() => removeCartHandler(list)}>
                        <i className=" bi bi-x-circle fs-5 fw-bold text-secondary "></i>
                      </span>
                      <img src={list.product_image} alt={list.product_name} style={{ width: '80px', height: '80px' }} />
                      <span className="ps-1">{list.product_name}</span>
                    </div>
                    <div className="col-3">
                      <div className="d-flex">
                        <button className="ps-2 pe-2" onClick={() => updateCartHandler(list, list.product_qty - 1)} disabled={list.product_qty === 1}>
                          -
                        </button>
                        <span className="ps-2 pe-2">{list.product_qty}</span>
                        <button className="ps-2 pe-2" onClick={() => updateCartHandler(list, list.product_qty + 1)} disabled={list.product_qty === list.product_stock}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-3 fs-6 fw-bold">Rp.{totalCount}</div>
                  </div>
                );
              })
            )}
          </div>
          <div className="row pt-2 ">
            <Link to="/product/Lates/all/none">
              <button className="btn  bg-light btn-sm rounded-0" style={{ width: '250px' }}>
                <i className="bi bi-arrow-up-left pe-1 "></i>
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row ps-2 ">
            <div className="border-bottom border-1 mb-3 pb-2">
              <span className="fw-bold">CART TOTALS</span>
            </div>
          </div>
          <div className="row ps-2">
            <div className="border-bottom border-1 mb-3 pb-2">
              <div className="row">
                <div className="col-9">Sub total :</div>
                <div className="col-3 fw-bold">Rp{formatNumberWithCommas(subTotal)}</div>
              </div>
            </div>
            <div className="border-bottom border-1 mb-3 pb-2">
              <div className="row">
                <div className="col-4">Sipping :</div>
                <div className="col-8">Enter your Adress to View shiping option</div>
              </div>
            </div>
            <div className="border-bottom border-1 mb-3 pb-2">
              <div className="row">
                <div className="col-9">Total :</div>
                <div className="col-3 fw-bold">
                  Rp
                  {formatNumberWithCommas(total)}
                </div>
              </div>
            </div>
            <div className="mt-2 mb-2 pb-2">
              <div className="row">
                <button className="btn btn-dark w-100 rounded-0" onClick={handelCekout} disabled={!listCart || listCart.length === 0}>
                  PROCEED TO CHECKOUT {loading ? <LoadingButton /> : ''}
                </button>
              </div>
            </div>
            <div className="border-bottom border-1 mt-4 mb-3 pb-2">
              <div className="row">
                <div className="col-9 fw-bold">
                  <i className="bi bi-tag pe-2 fs-5"></i>COUPON{' '}
                  <span className="text-secondary">
                    <i>{hemat}</i>
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2 pb-2">
              <div className="row">
                <input className="p-2" type="text" value={vocer} placeholder="Cupon Code" onChange={handelVocer} />
              </div>
            </div>
            <div className="mb-2 pb-2">
              <div className="row">
                <button type="submit" className="btn btn-light w-100 rounded-0" onClick={handelAplay}>
                  Applay Cupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
