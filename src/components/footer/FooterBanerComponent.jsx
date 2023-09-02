import React from 'react';
import './styleFooter.css';

export default function FooterBanerComponent() {
  return (
    <div className="container-fluid">
      {' '}
      <div className="row ">
        <div className="col-12 p-0 m-0">
          <div className="baner  position-relative  ">
            <img src="images/footer-baner.png" className=" w-100 img-fluid " alt="baner hijjab" />
            <div className="position-absolute top-50 start-50  translate-middle text-center">
              <p className=" text-dark px-3 py-2 ps-3 fs-3">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
