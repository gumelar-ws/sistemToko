import React, { useEffect, useState } from 'react';
import LoadingButton from '../loadingBox/LoadingButton';
// import { useNavigate } from 'react-router-dom';

export default function TotalDetail({ dataCart, ongkir, setDataPost, handleFormSubmit, loadingBtn }) {
  // const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState('');
  const [radioChecked, setRadioChecked] = useState('');
  const [selectOptions, setSelectOptions] = useState([]);
  const [total, setTotal] = useState(0);
  const [costValue, setCostValue] = useState(0);

  function formatNumberWithCommas(number) {
    return number.toLocaleString('id-ID');
  }

  function formatStringPrice(item) {
    return item.product_price.replace(/\./g, '');
  }

  let totalPrice = dataCart.reduce((a, p) => {
    const x = parseInt(formatStringPrice(p)) * p.product_qty;
    return a + x;
  }, 0);

  useEffect(() => {
    setTotal(totalPrice);
  }, [totalPrice]);

  useEffect(() => {
    if (ongkir && ongkir.length > 0) {
      setRadioChecked(ongkir[0].code);
      const firstSelectOptions = ongkir[0]['costs'].map((v) => v.service);
      setSelectOptions(firstSelectOptions);
      setSelectedValue(firstSelectOptions[0]);
      setCostValue(ongkir[0]['costs'][0]?.cost[0]?.value || 0);
    }
  }, [ongkir]);

  useEffect(() => {
    if (ongkir && ongkir.length > 0) {
      const selectedData = ongkir.find((d) => d.costs.some((c) => c.service === selectedValue));

      if (selectedData) {
        const costValue = selectedData.costs.find((c) => c.service === selectedValue)?.cost[0]?.value || 0;
        setCostValue(costValue);
      }
    }
  }, [ongkir, selectedValue]);

  const handleRadioChange = (val) => {
    const selectOptionsForRadio = ongkir.find((v) => v.code === val)?.costs.map((v) => v.service) || [];
    setSelectOptions(selectOptionsForRadio);
    if (!selectOptionsForRadio.includes(selectedValue)) {
      setSelectedValue(selectOptionsForRadio[0] || '');
    }

    setRadioChecked(val);

    const selectedData = ongkir.find((d) => d.code === val);
    if (selectedData) {
      const costValue = selectedData.costs.find((c) => c.service === selectedValue)?.cost[0]?.value || 0;
      setCostValue(costValue);
    }
  };

  useEffect(() => {
    setDataPost((prevData) => ({ ...prevData, expedition_code: radioChecked, expedition_service: selectedValue, expedition_weight: selectedValue, expedition: radioChecked }));
  }, [setDataPost, radioChecked, selectedValue]);

  // const handelPay = () => {
  //   navigate('/product/payment-complite');
  // };

  console.log('value', selectedValue);
  console.log('radio', radioChecked);

  return (
    <div>
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
                  {dataCart?.map((item) => (
                    <>
                      <div className="col-9 mb-2">{item.product_name}</div>
                      <div className="col-3 fw-bold ">
                        Rp
                        {item.product_price}
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="border-bottom border-1 mb-3 pb-2">
                <div className="row">
                  <div className="col-9 fw-bold">Subtotal</div>
                  <div className="col-3 fw-bold">Rp{formatNumberWithCommas(total)}</div>
                </div>
              </div>
              <div className="border-bottom border-1 mb-3 pb-2">
                <div className="row">
                  <div className="col">
                    <div className=" fw-bold mb-3">Shipping</div>
                    {selectedValue ? (
                      ongkir?.map((val, i) => (
                        <div key={val.code} className="form-check mb-3">
                          <div>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id={`serviceId-${i}`} checked={radioChecked === val.code} onChange={() => handleRadioChange(val.code)} />
                            <label className="form-check-label fw-bold" htmlFor={`serviceId-${i}`}>
                              {val.code.toUpperCase()}{' '}
                              <select
                                className={`text-bold border-0 pe-2   ${radioChecked !== val.code ? 'd-none' : ''} `}
                                name={`service-${i}`}
                                id={`service-${i}`}
                                onChange={(e) => setSelectedValue(e.target.value)}
                                disabled={radioChecked !== val.code}
                              >
                                {selectOptions.map((option, j) => (
                                  <option key={j} value={option}>
                                    {option} Rp.{val['costs'][j]?.cost[0]?.value}
                                  </option>
                                ))}
                              </select>
                            </label>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-warning">Silakan Masukkan Alamat Terlebih Dahulu!</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="border-bottom border-2 mb-3 pb-2">
                <div className="row">
                  <div className="col-9 fw-bold">TOTAL</div>
                  <div className="col-3 fw-bold">Rp{formatNumberWithCommas(total + costValue)}</div>
                </div>
              </div>
              {/* <div className="payment">
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
                      <img className="me-3 border border-secondary rounded-1 p-1" src="/images/logoBCA.png" alt="bcalogo" />
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
                      <img className="me-3" src="/images/logoQRIS.png" alt="rislogo" />
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
                      <img className="me-3" src="/images/logoGoPay.png" alt="gopylogo" />
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
                      <img className="me-3" src="/images/logoBNI.png" alt="bnilogo" />
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
                </div> */}
            </div>
          </div>
        </div>
        <div className="row ms-2 ps-1  ">
          <div>
            <button type="submit" className="btn btn-dark w-100 rounded-0" onClick={handleFormSubmit} disabled={selectedValue === ''}>
              PAYMENT PROCEED{loadingBtn ? <LoadingButton /> : ''}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
