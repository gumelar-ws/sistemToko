import React, { useEffect, useState } from 'react';
import './styleCart.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function CartComponent({ totalPrice, totalCart }) {
  const dispatch = useDispatch();
  const [subTotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [vocer, setVocer] = useState('');
  const [hemat, setHemat] = useState('');
  const listCart = useSelector((state) => state.cart.cart.cartItems);

  function formatNumberWithCommas(number) {
    return number.toLocaleString('id-ID');
  }
  function formatStringPrice(item) {
    return item.price.replace(/\./g, '');
  }

  let vocerPricePercentage = 0.21;
  let subTotalPrice = listCart.reduce((a, p) => {
    const x = parseInt(formatStringPrice(p)) * p.quantity;
    return a + x;
  }, 0);

  useEffect(() => {
    setSubtotal(subTotalPrice);
    setTotal(subTotalPrice);
    setHemat('');
  }, [subTotalPrice]);

  useEffect(() => {
    localStorage.removeItem('total');
    localStorage.setItem('total', JSON.stringify(formatNumberWithCommas(total)));
  }, [total]);

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

  const updateCartHandler = async (item, quantity) => {
    if (item.stock < quantity) {
      window.alert('Sorry, Product is out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };

  const removeCartHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
    localStorage.removeItem('total');
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
            {listCart &&
              listCart.map((list) => {
                const totalCount = formatNumberWithCommas(parseInt(formatStringPrice(list)) * list.quantity);
                return (
                  <div key={list.id} className="row  d-flex align-items-center mb-3 pb-3 border-bottom border-2">
                    <div className="col text-truncate">
                      <span className="pe-1 ms-0" style={{ cursor: 'pointer' }} onClick={() => removeCartHandler(list)}>
                        <i className=" bi bi-x-circle fs-5 fw-bold text-secondary "></i>
                      </span>
                      <img src={list.photo} alt={list.name} style={{ width: '80px', height: '80px' }} />
                      <span className="ps-1">{list.name}</span>
                    </div>
                    <div className="col-3">
                      <div className="d-flex">
                        <button className="ps-2 pe-2" onClick={() => updateCartHandler(list, list.quantity - 1)} disabled={list.quantity === 1}>
                          -
                        </button>
                        <span className="ps-2 pe-2">{list.quantity}</span>
                        <button className="ps-2 pe-2" onClick={() => updateCartHandler(list, list.quantity + 1)} disabled={list.quantity === list.stock}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-3 fs-6 fw-bold">
                      {list.currency} {totalCount}
                    </div>
                  </div>
                );
              })}
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
                <div className="col-3 fw-bold">Rp {formatNumberWithCommas(subTotal)}</div>
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
                <Link to="/product/checkout-detail">
                  <button className="btn btn-dark w-100 rounded-0">PROCEED TO CHECKOUT</button>
                </Link>
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
