import React, { useEffect } from 'react';
import HederPathProductList from '../components/componentProductList/HederPathProductList';
import CartComponent from '../components/shoppingCart/CartComponent';

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0); // Menggulirkan halaman ke atas setelah komponen selesai dimuat
  }, []);
  return (
    <div>
      <div className="container">
        <HederPathProductList content1="SHOPPING CART" content1Style="fw-bold" content2="CHECKOUT DETAILS" content3="PAYMENT COMPLATE" content4Style="d-none" content5Style="d-none" display="d-none" />
        <CartComponent />
      </div>
    </div>
  );
}
