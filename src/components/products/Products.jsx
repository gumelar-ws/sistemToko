import React from 'react';
import './styleProducts.css';
import { Link } from 'react-router-dom';

export default function Products({ products }) {
  return (
    <div>
      {' '}
      <div className="row p-3 ">
        {products &&
          products.slice(0, 4).map((product) => (
            <div className=" col-6 col-lg-3 col-md-3  mb-4" key={product.id}>
              <div className="card border-0">
                <Link to={`/product/${product.name}`}>
                  <img src={product.photo} className="card-img-top" alt={product.name} />
                </Link>
                <div className="card-body m-0 p-0  ">
                  <h4 className="card-categori mt-2  ">{product.keywords[0].text}</h4>
                  <h5 className="card-title ">{product.name}</h5>
                  <p className="card-price">
                    <span className="strikethrough card-price-discount">
                      {product.currency} {product.price}
                    </span>{' '}
                    <span className="text-red-100 fw-bold card-price-fix ">
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
