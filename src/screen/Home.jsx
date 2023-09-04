import React, { useEffect, useState } from 'react';
import { api } from '../app/actions';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = async () => {
      const res = await api.get('/product');
      setProducts(res.data.aaData);
    };
    data();
  }, []);
  console.log(products);
  return (
    <div>
      {products.map((v) => (
        <p key={v.id}>{v.name}</p>
      ))}
    </div>
  );
}
