import { Link } from 'react-router-dom';

export default function FooterComponent({ config, user }) {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      {' '}
      <div className="container">
        <div className="row p-5 ">
          <div className="col-md-4 col-sm-6">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-dark" to="/hijja/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/hijja/caraPembelian">
                  Cara Pembelian
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="/hijja/konfirmasiPembayaran">
                  Konfirmasi Pembayaran{' '}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-dark" to="/hijja/about">
                  Tentang Hijja
                </Link>
              </li>
              <li>
                <a className="text-dark" href="/">
                  Pengembalian dan penukaran
                </a>
              </li>
              <li>
                <Link className="text-dark" to="/hijja/syaratDanKetentuan">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5>Contact Us</h5>
            <address>
              <p>
                Email: <a href="mailto:info@example.com">{user.email ? user.email : 'hijja@example.com'}</a>
              </p>
              <p>
                Phone: <a href="tel:+123456789">{config && config.config_contact}</a>
              </p>
              <p>Address: {config && config.config_address}</p>
            </address>
          </div>
        </div>
      </div>
      <div className=" text-start text-muted mt-3">
        <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  );
}
