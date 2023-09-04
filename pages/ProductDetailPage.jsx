import React from 'react';
import HederPathProductList from '../components/componentProductList/HederPathProductList';
import DetailProductComponent from '../components/componentDitaileProducts/DitaileProductComponent';

export default function ProductDetailPage() {
  return (
    <div>
      <div className="container">
        <HederPathProductList content1="HOME" content2="T-SHIRT COLLECTION" content3="T-SHIRT" content4="DETAIL" content4Style="fw-bold" content5Style="d-none" />
      </div>
      <DetailProductComponent />
    </div>
  );
}
