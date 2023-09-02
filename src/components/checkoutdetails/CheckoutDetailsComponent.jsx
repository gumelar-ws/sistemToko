import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutDetailsComponent() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 pe-3 pe-md-0 mb-md-5">
          <div className="container   pe-5 ">
            <h5 className="fw-bold fs-5 mt-3">BILINGS DETAILS</h5>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label for="email" className="form-label position-relative fw-bold">
                    Email address <span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input type="email" className="form-control rounded-0 shadow-none " id="email" placeholder="name@example.com" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label for="first" className="form-label position-relative fw-bold">
                    First Name <span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none" id="first" placeholder="Nama depan" />
                </div>
              </div>
              <div className="col ">
                <div className="mb-3">
                  <label for="last" className="form-label position-relative fw-bold">
                    Last Name <span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none" id="last" placeholder="Nama Belakang" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label for="compani" className="form-label position-relative fw-bold">
                    Company name(Opsional)
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none" id="compani" placeholder="Sisko" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label for="region" className="form-label position-relative fw-bold">
                    Region / Country<span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none" id="region" placeholder="Indonesia" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label for="street" className="form-label position-relative fw-bold">
                    Street address<span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none " id="street" placeholder="Jakarta Regrency" />
                </div>
              </div>
              <div className="col ">
                <div className="mb-3">
                  <label for="street2" className="form-label position-relative opacity-0 ">
                    Setreet Adress<span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none" id="street2" placeholder="Apartement,suite,unit(opsional)" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className=" position-relative fw-bold mb-2 ">
                  Provinsis <span className="position-absolute text-danger">*</span>
                </div>
                <div class="input-group mb-3  ">
                  <select class="form-select rounded-0 shadow-none" id="inputGroupSelect01">
                    <option selected>Jawa Barat</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className=" position-relative fw-bold mb-2">
                  Kota / Kabupaten <span className="position-absolute text-danger">*</span>
                </div>
                <div class="input-group mb-3  ">
                  <select class="form-select rounded-0 shadow-none" id="inputGroupSelect01">
                    <option selected>kab.Bogor</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className=" position-relative fw-bold mb-2">
                  Kecamataan <span className="position-absolute text-danger">*</span>
                </div>
                <div class="input-group mb-3  ">
                  <select class="form-select rounded-0 shadow-none" id="inputGroupSelect01">
                    <option selected>Tajurhalang</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label for="kodepos" className="form-label position-relative fw-bold">
                    Kode Pos<span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none" id="kodepos" placeholder="Kode Pos" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label for="phone" className="form-label position-relative fw-bold">
                    Phone<span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none" id="phone" placeholder="No Phone" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6  ">
          <div className="container  ">
            <div className="border border-dark bg-light ms-4 ps-3 pe-3 pt-2">
              <div className="ps-2 pe-2">
                <div className="row mt-3 ">
                  <div className=" mb-2 ">
                    <h5 className="fw-bold fs-5">YOUR ORDER</h5>
                  </div>
                </div>
                <div className="row ">
                  <div className="border-bottom border-2 mb-3 pb-2">
                    <div className="row">
                      <div className="col-9 fw-bold">PRODUCT</div>
                      <div className="col-3 fw-bold">SUBTOTAL</div>
                    </div>
                  </div>
                  <div className="border-bottom border-1 mb-3 pb-2">
                    <div className="row">
                      <div className="col-9">Gamis Moderen</div>
                      <div className="col-3 fw-bold ">Rp.200.000</div>
                    </div>
                  </div>
                  <div className="border-bottom border-1 mb-3 pb-2">
                    <div className="row">
                      <div className="col-9 fw-bold">Subtotal</div>
                      <div className="col-3 fw-bold">Rp.200.000</div>
                    </div>
                  </div>
                  <div className="border-bottom border-1 mb-3 pb-2">
                    <div className="row">
                      <div className="col">
                        <div className=" fw-bold mb-3">Shipping</div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                          <label className="form-check-label fw-bold" for="flexRadioDefault1">
                            J&T Exspress : 10.000
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                          <label className="form-check-label" for="flexRadioDefault2">
                            SiCepat : 12.000
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                          <label className="form-check-label" for="flexRadioDefault3">
                            SiCepat : 18.000
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom border-2 mb-3 pb-2">
                    <div className="row">
                      <div className="col-9 fw-bold">TOTAL</div>
                      <div className="col-3 fw-bold">Rp.210.000</div>
                    </div>
                  </div>
                  <div className="payment">
                    <div className="row">
                      <div className="col-9 ">
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="radio" name="payment" id="payment1" checked />
                          <label className="form-check-label " for="payment1">
                            <div className="fw-bold"> Bayar Manual BCA</div>
                            <div className="text-secondary fw-normal " style={{ fontSize: '12px' }}>
                              ID pembelian anda akan muncul saat anda sudah memilih pembayaran dan melanjutkanya
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3 text-end ">
                        <img className="me-3 border border-secondary rounded-1 p-1" src="/images/logoBCA.png" alt="" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-9 ">
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="radio" name="payment" id="payment2" />
                          <label className="form-check-label " for="payment2">
                            <div> Bayar Dengan QRIS</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3 text-end ">
                        <img className="me-3" src="/images/logoQRIS.png" alt="" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-9 ">
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="radio" name="payment" id="payment3" />
                          <label className="form-check-label " for="payment3">
                            <div> Bayar Dengan GoPay</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3 text-end ">
                        <img className="me-3" src="/images/logoGoPay.png" alt="" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-9 ">
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="radio" name="payment" id="payment4" />
                          <label className="form-check-label " for="payment4">
                            <div> Bayar Dengan BNI</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3 text-end ">
                        <img className="me-3" src="/images/logoBNI.png" alt="" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-9 ">
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="radio" name="payment" id="payment5" />
                          <label className="form-check-label " for="payment5">
                            <div> Bayar Dengan Mandiri</div>
                          </label>
                        </div>
                      </div>
                      <div className="col-3 text-end ">
                        <img className="me-3" src="/images/logoMandiri.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ms-2 ps-1  ">
              <div>
                <Link to="/product/payment-complite">
                  <button className="btn btn-dark w-100 rounded-0">PAYMENT PROCEED</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
