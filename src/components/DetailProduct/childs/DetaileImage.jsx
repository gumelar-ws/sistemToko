import React from 'react';
import './style.css';

export default function DetaileImage({ detailProduct, detailProductChilds }) {
  const combinedProduct = [...detailProduct, ...detailProductChilds];
  return (
    <div>
      {' '}
      <div id="indicators" className="carousel slide ">
        <div className="carousel-inner">
          {combinedProduct &&
            combinedProduct.map((product, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active ' : ''}`}>
                <img src={product.photo} className="d-block w-100 img-ditail" alt={product.name} />
              </div>
            ))}
        </div>
        <div className="show-pop-up ">
          <button className="carousel-control-prev" type="button">
            <span data-bs-target="#indicators" data-bs-slide="prev" style={{ marginBottom: '130px' }} aria-hidden="true">
              <i className="bi bi-chevron-left fs-2 text-dark"></i>
            </span>
            <span className="visually-hidden">Previous</span>
            <span className="btn  bg-white shadow-sm rounded-circle bottom-0  position-absolute  pt-2 pb-2 " style={{ marginBottom: '200px' }}>
              <i className="bi bi-arrows-angle-expand fw-bold  text-dark"></i>
            </span>
          </button>
        </div>
        <button className="carousel-control-next " type="button">
          <span data-bs-target="#indicators" data-bs-slide="next" style={{ marginBottom: '130px' }} aria-hidden="true">
            <i className="bi bi-chevron-right fs-2 text-dark"></i>
          </span>{' '}
          <span className="visually-hidden">Next</span>
        </button>
        <div id="indicators" className="carousel position-relative d-flex overflow-x-scroll ">
          <div className="carousel-indicators  position-relative  ms-0">
            {combinedProduct &&
              combinedProduct.map((product, index) => (
                <button
                  key={product.id}
                  data-bs-target="#indicators"
                  data-bs-slide-to={index}
                  className={`ms-0 me-2 btn-size ${index === 0 ? 'active' : ''}`}
                  aria-current={index === 0 ? 'true' : undefined}
                  aria-label={`Slide ${index + 1}`}
                  style={{
                    backgroundImage: `url('${product.photo}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s, background-color 0.3s',
                    scrollSnapAlign: 'start',
                  }}
                ></button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
