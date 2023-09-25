import React from 'react';
import './styleQouts.css';

export default function QuoteCaroselProduct() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide end-0">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/gambar1.png" className="d-block  w-100 img " alt="..." />
            <div className="carousel-caption  d-md-block section-custom top-0 start-0 end-0 bottom-0">
              <div className="section-start text-start">
                <span className="fw-bold fs-1 f-lobster fws">
                  AGUSTUS <p>BIG SALE</p>
                </span>
                <p className="text-white fw-light fws-sm">today is the right time to spend your money, increase your confidence with improve your hijab style and get rewards Today only! Don't miss it!</p>
                <span className="fw-bold fs-1 f-lobster fws">
                  JILBAB <p>100K</p>
                </span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/gambar1.png" className="d-block w-100 img" alt="..." />
            <div className="carousel-caption  d-md-block section-custom top-0 start-0 end-0 bottom-0">
              <div className="section-start text-start">
                <span className="fw-bold fs-1 f-lobster fws">
                  AGUSTUS <p>BIG SALE</p>
                </span>
                <p className="text-white fw-light fws-sm">today is the right time to spend your money, increase your confidence with improve your hijab style and get rewards Today only! Don't miss it!</p>
                <span className="fw-bold fs-1 f-lobster fws">
                  JILBAB <p>100K</p>
                </span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/gambar1.png" className="d-block w-100 img " alt="..." />
            <div className="carousel-caption  d-md-block section-custom top-0 start-0 end-0 bottom-0">
              <div className="section-start text-start">
                <span className="fw-bold fs-1 f-lobster fws">
                  AGUSTUS <p>BIG SALE</p>
                </span>
                <p className="text-white fw-light fws-sm">today is the right time to spend your money, increase your confidence with improve your hijab style and get rewards Today only! Don't miss it!</p>
                <span className="fw-bold fs-1 f-lobster fws">
                  JILBAB <p>100K</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
