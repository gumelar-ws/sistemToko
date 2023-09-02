import React from 'react';

export default function FooterComponent() {
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
                <a className="text-dark" href="/">
                  FAQ
                </a>
              </li>
              <li>
                <a className="text-dark" href="/">
                  Support
                </a>
              </li>
              <li>
                <a className="text-dark" href="/">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <a className="text-dark" href="/">
                  Company
                </a>
              </li>
              <li>
                <a className="text-dark" href="/">
                  Mission
                </a>
              </li>
              <li>
                <a className="text-dark" href="/">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h5>Contact Us</h5>
            <address>
              <p>
                Email:{' '}
                <a className="text-dark" href="mailto:info@example.com">
                  info@example.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a className="text-dark" href="tel:+123456789">
                  +123456789
                </a>
              </p>
              <p>Address: 123 Street, City</p>
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
