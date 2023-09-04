import React from 'react';
import HederPathProductList from '../components/componentProductList/HederPathProductList';
import PaymentComplite from '../components/paymentComplete/PaymentComplite';

export default function CompletePayment() {
  return (
    <div>
      <HederPathProductList content1="SHOPPING CART" content2="CHECKOUT DETAILS" content3Style="fw-bold" content3="PAYMENT COMPLATE" content4Style="d-none" content5Style="d-none" />
      <PaymentComplite />
    </div>
  );
}
