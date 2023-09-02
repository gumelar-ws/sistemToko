import React, { useState } from 'react';
import './styleNavComponent.css';
import { Link, useNavigate } from 'react-router-dom';
export default function NavbarComponent({ total }) {
  const [btnSerch, setBtnSerch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const toggleSerch = () => {
    setBtnSerch(!btnSerch);
  };

  const handleSearch = () => {
    if (searchValue) {
      navigate(`/product/Lates/all/${searchValue}`);
    }
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand ps-3" href="/">
            <img src="images/logo.png" alt="logo" />
          </a>
          {/* nav item bagian 1 */}
          <ul className="nav navigasi d-lg-none d-sm-flex d-md-flex mx-auto ">
            <li className="nav-item border-end">
              <Link className="nav-link active" aria-current="page" onClick={toggleSerch}>
                <i className="bi bi-search text-dark "></i>
              </Link>
            </li>
            <li className="nav-item border-end">
              <a className="nav-link text-dark  " href="/">
                <span className="text-sm-none"> LOGIN</span> <i className="bi bi-person text-md-none"></i>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/product/shoppingCart" className="nav-link text-dark ">
                <span className="text-sm-none">CART</span>
                <span className="fw-bold text-sm-none">{total}</span> <i className="bi bi-cart3"></i>
              </Link>
            </li>
          </ul>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav p-2  border-md">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle  text-dark " href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SHOP
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/product/Lates/all/none">
                      Products List
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      T-Shirt
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-dark " href="/">
                  PAYMENT CONFIRMATION
                </a>
              </li>
              <li className="nav-item">
                <Link to="/product/checkout-detail" className="nav-link  text-dark ">
                  TRACK YOUR ORDER
                </Link>
              </li>
            </ul>
            {/* nav item bagian 2 */}
            <ul className=" navbar-nav mx-auto mx-custom d-none d-md-none  d-lg-flex ">
              <li className="nav-item border-end">
                <Link className="nav-link  " onClick={toggleSerch}>
                  <i className="bi bi-search text-dark fw-bold"></i>
                </Link>
              </li>
              <li className="nav-item border-end">
                <a className="nav-link  text-dark " href="/">
                  LOGIN
                </a>
              </li>
              <li className="nav-item">
                <Link to="/product/shoppingCart" className="nav-link text-dark ">
                  CART <span className="fw-bold">{total}</span> <i className="bi bi-cart3"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {btnSerch && (
        <div className="container  d-flex justify-content-center mt-1 mb-1">
          <div>
            <input className="pt-1 pb-1 ps-3 pe-3  " type="text" placeholder="Masukkan kata kunci pencarian" value={searchValue} onChange={handleInputChange} />
            <button onClick={handleSearch} className="pt-1 pb-1 ps-3 pe-3">
              Cari
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
