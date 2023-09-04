import React from 'react';
import HederPathProductList from '../components/componentProductList/HederPathProductList';
import DetailComponent from '../components/DetailProduct/DetailComponent';

export default function Detail() {
  return (
    <div>
      <div className="container">
        <HederPathProductList content1="HOME" content2="T-SHIRT COLLECTION" content3="T-SHIRT" content4="DETAIL" content4Style="fw-bold" content5Style="d-none" />
      </div>
      <DetailComponent />
    </div>
  );
}
