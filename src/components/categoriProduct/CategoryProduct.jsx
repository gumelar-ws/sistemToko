import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryProduct({ products, loading, error }) {
  return (
    <div>
      <div className="row p-3">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
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
          ))
        )}
        {/* <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src="images/pants.png" className="card-img-top" alt="Random Image" />
            <div className="card-img-overlay d-flex flex-column justify-content-end text-center d-none">
              <h5 className="card-title mb-0 text-white">PANTS COLLECTION</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mb-4">
          <div className="card">
            <img src="images/acsesoris.png" className="card-img-top" alt="Random Image" />
            <div className="card-img-overlay d-flex flex-column justify-content-end text-center d-none">
              <h5 className="card-title mb-0 text-white">ACCESSORIES COLLECTION</h5>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
