import React from 'react';
import { Link } from 'react-router-dom';

export default function Category({ products }) {
  return (
    <div>
      <div className="row p-3">
        {products &&
          products.slice(0, 3).map((product) => (
            <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
              <Link to={`product/Lates/${product.keywords[0].id}/none`}>
                <div className="card">
                  <img src={product.photo} className="card-img-top" alt={product.name} />
                  <div className="card-img-overlay d-flex flex-column justify-content-end text-center mb-3 ">
                    <h5 className="card-title mb-0 text-white">{product.keywords[0].text}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
