import React from 'react';
import HederPathProductList from '../components/componentProductList/HederPathProductList';
import CheckoutDetailsComponent from '../components/checkoutdetails/CheckoutDetailsComponent';

export default function Checkout() {
  return (
    <div>
      <div className="container">
        <HederPathProductList content1="SHOPPING CART" content2="CHECKOUT DETAILS" content2Style="fw-bold" content3="PAYMENT COMPLATE" content4Style="d-none" content5Style="d-none" display="d-none" />
        <CheckoutDetailsComponent />
      </div>
    </div>
  );
}
