import React from 'react';
import { Link } from 'react-router-dom';

export default function Category({ products }) {
  return (
    <div>
      <div className=" p-3 pb-sm-0 position-relative w-auto d-flex overflow-x-scroll">
        {products &&
          products.map((product) => (
            <div className="me-2 " key={product.id}>
              <Link to={`product/Lates/${product.keywords[0].id}/none`}>
                <div className="card">
                  <img src={product.photo} className="card-img-top img-custom-cat" alt={product.name} />
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
