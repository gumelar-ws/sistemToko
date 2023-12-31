import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function RelateProduct({ relatedProducts, scrollTop }) {
  return (
    <div>
      <div className=" p-3 position-relative w-auto d-flex overflow-x-scroll ">
        {relatedProducts &&
          relatedProducts.map((product) => (
            <div className=" mb-4 me-2 " key={product.id}>
              <div className="card border-0" onClick={scrollTop}>
                <Link to={`/product/${product.name}`}>
                  <img src={product.photo} className="card-img-top img-custom" alt={product.name} />
                </Link>
                <div className="card-body m-0 p-0  ">
                  <h4 className="card-categori mt-2 ">{product.keywords[0].text}</h4>
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
    // <div className="related-products">
    //   <div className="related-products-grid">
    //     {relatedProducts &&
    //       relatedProducts.slice(0, 4).map((product) => (
    //         <div className="related-product-card" key={product.id}>
    //           <Link to={`/product/${product.id}`}>
    //             <img src={product.photo} className="card-img-top" alt={product.name} />
    //           </Link>
    //           <div className="card-body">
    //             <h4 className="card-title fs-6">{product.keywords[0].text}</h4>
    //             <h5 className="card-title fs-5">{product.name}</h5>
    //             <p>
    //               <span className="strikethrough">
    //                 {product.currency} {product.price}
    //               </span>{' '}
    //               <span className="text-red-100 fw-bold">
    //                 {product.currency} {product.price}
    //               </span>
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //   </div>
    // </div>
  );
}
