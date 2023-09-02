import React from 'react';
import { Link } from 'react-router-dom';

export default function PaymentComplite() {
  return (
    <div>
      <div className="container ">
        <div className="row w-50">
          <div className="col">
            <ul>
              <li>ID NUMBER :</li>
            </ul>
          </div>
          <div className="col fw-bold">4567</div>
        </div>
        <div className="row w-50">
          <div className="col">
            <ul>
              <li>DATE :</li>
            </ul>
          </div>
          <div className="col fw-bold">AGUSTUS 25, 2023</div>
        </div>
        <div className="row w-50">
          <div className="col">
            <ul>
              <li>TOTAL :</li>
            </ul>
          </div>
          <div className="col fw-bold">Rp. 210.000</div>
        </div>
        <div className="row w-50">
          <div className="col">
            <ul>
              <li>PAYMENT METHOD</li>
            </ul>
          </div>
          <div className="col fw-bold">BCA VIRTUAL ACOUNT</div>
        </div>
        <div className="row w-50">
          <div className="col">
            <ul>
              <li>NOMOR VIRTUAL ACOUNT</li>
            </ul>
          </div>
          <div className="col fw-bold">111344563</div>
        </div>
        <div className="row mt-5 w-50">
          <div className="col">
            <span>
              Need help with payment?{' '}
              <span className="fw-bold ">
                <Link className="link-info" href="/">
                  Here
                </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
