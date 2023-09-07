import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ products }) {
  return (
    <div>
      <div className="row p-3">
        {products.map((product, i) => (
          <div className="col-lg-3 col-md-3 col-6 mb-4" key={i}>
            <div className="card border-0">
              <Link to={`/product/${product.name}`}>
                <img src={product.photo} className="card-img-top" alt={product.name} />
              </Link>
              <div className="card-body m-0 p-0">
                <h4 className="card-categori  mt-2">{product.keywords[0].text}</h4>
                <h5 className="card-title ">{product.name}</h5>
                <p className="card-price">
                  <span className="strikethrough card-price-discount">
                    {product.currency} {product.price}
                  </span>{' '}
                  <span className="text-red-100 fw-bold card-price-fix">
                    {product.currency} {product.price}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
