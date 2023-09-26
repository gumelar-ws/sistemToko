import React, { useEffect, useState } from 'react';
import { api, apiLocation } from '../../app/actions';
import TotalDetail from './TotalDetail';
import { useDispatch, useSelector } from 'react-redux';
import { isValidEmail } from './ValidasiInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CheckoutDetailsComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listCart = useSelector((state) => state.cart.cart.cartItems);

  const [province, setProvince] = useState([]);
  const [provinceId, setProvinceId] = useState(0);
  const [city, setCity] = useState([]);
  const [cityId, setCityId] = useState(0);
  const [subdistrict, setSubdistrict] = useState([]);
  const [subdistrictId, setSubdistrictId] = useState(0);
  const [weight, setWeight] = useState(200);
  const [adressIdAsal, setAdressIdAsal] = useState(0);
  const [ongkir, setOngkir] = useState([]);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [noHp, setNoHp] = useState(0);

  const [namaDepan, setNamaDepan] = useState('');
  const [namaBelakang, setNamaBelakang] = useState('');

  const [deliveryAddress, setDeliveryAddress] = useState({
    regrency: '',
    detail: '',
  });

  const data = JSON.stringify(listCart);
  const [dataPost, setDataPost] = useState({
    order_json: data,
    permalink: '',
    customer_email: '',
    customer_name: '',
    customer_phone: '',
    customer_wa: '',
    customer_line: '',
    delivery_from_name: '',
    delivery_phone: '',
    delivery_province: 0,
    delivery_city: 0,
    delivery_district: 0,
    delivery_address: '',
    sale_keterangan: '',
    expedition: '',
    voucher: '',
    expedition_code: '',
    expedition_service: '',
    expedition_weight: '',
    use_expedition_setting: 1,
    kode_voucher: '',
  });

  const [inputValidation, setInputValidation] = useState({
    customer_email: true,
    customer_name: true,
    customer_phone: true,
    delivery_from_name: true,
    delivery_phone: true,
    delivery_province: true,
    delivery_city: true,
    delivery_district: true,
    delivery_address: true,
    expedition_code: true,
    expedition_service: true,
    expedition_weight: true,
  });

  const [errorMessage, setErrorMessage] = useState({
    customer_email: '',
    customer_name: '',
    customer_phone: '',
    delivery_from_name: '',
    delivery_phone: '',
    delivery_province: '',
    delivery_city: '',
    delivery_district: '',
    delivery_address: '',
    expedition_code: '',
    expedition_service: '',
    expedition_weight: '',
  });

  const validateInputs = () => {
    let isValid = true;
    const errors = {};

    if (!dataPost.customer_email) {
      isValid = false;
      errors.customer_email = 'Email harus diisi.';
    } else if (!isValidEmail(dataPost.customer_email)) {
      isValid = false;
      errors.customer_email = 'Email tidak valid.';
    } else {
      errors.customer_email = '';
    }

    if (!dataPost.customer_name) {
      isValid = false;
      errors.customer_name = 'Nama depan harus diisi.';
    } else {
      errors.customer_name = '';
    }

    if (!dataPost.delivery_address) {
      isValid = false;
      errors.delivery_address = 'Alamat pengiriman harus diisi.';
    } else {
      errors.delivery_address = '';
    }

    if (!dataPost.customer_phone) {
      isValid = false;
      errors.customer_phone = 'Nomor telepon harus diisi.';
    } else {
      errors.customer_phone = '';
    }

    if (errors) {
      setLoadingBtn(false);
    }

    setInputValidation({
      ...inputValidation,
      customer_email: isValid,
      customer_name: isValid,
      customer_phone: isValid,
      delivery_address: isValid,
    });

    setErrorMessage(errors);

    return isValid;
  };

  useEffect(() => {
    const getLocation = async () => {
      try {
        const res = await apiLocation.get('/province');
        setProvince(res.data);
      } catch (error) {
        console.log('get province', error);
      }
    };

    getLocation();

    const adressTokoId = async () => {
      try {
        const res = await api.get(`/website`);
        const resId = await res.data.data.config;
        const toko = await res.data.data.user;

        setAdressIdAsal(resId.config_user_id);
        setNoHp(resId.config_wa);
        setDataPost((prevData) => ({
          ...prevData,
          permalink: toko.user_permalink,
        }));
      } catch (error) {
        console.log('get web info user adres id ', error);
      }
    };

    adressTokoId();
  }, []);

  useEffect(() => {
    const concatName = namaDepan + namaBelakang;
    const concatAdress = deliveryAddress.regrency + deliveryAddress.detail;
    setDataPost((prevData) => ({
      ...prevData,
      customer_name: concatName,
      delivery_from_name: concatName,
      delivery_address: concatAdress,
    }));
  }, [namaDepan, namaBelakang, deliveryAddress]);

  useEffect(() => {
    if (!listCart) {
      return;
    }
    const totalWeight = listCart?.reduce((total, item) => {
      return item['product_weight'] * 1 + total;
    }, 0);
    setWeight(totalWeight);
  }, [listCart]);

  useEffect(() => {
    const getCity = async () => {
      if (provinceId === 0) {
        return;
      } else {
        try {
          const res = await apiLocation.get(`/city/${provinceId}`);
          setCity(res.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getCity();
  }, [provinceId]);

  useEffect(() => {
    const getSubDistrict = async () => {
      if (cityId === 0) {
        return;
      } else {
        try {
          const res = await apiLocation.get(`/subdistrict?id=${cityId}`);
          setSubdistrict(res.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getSubDistrict();
  }, [cityId]);

  useEffect(() => {
    const cekOngkir = async () => {
      if (subdistrictId === 0) {
        return;
      } else {
        const res = await apiLocation.get(`/ongkir?id=${adressIdAsal}&destination=${subdistrictId}&weight=${weight ? weight : 200}`);
        const dat = await res.data;
        setOngkir(dat.data);
      }
    };
    cekOngkir();
  }, [adressIdAsal, subdistrictId, weight]);

  // const [statusSubmit, setStatusSubmit] = useState('');

  const handleFormSubmit = async () => {
    try {
      const isValid = validateInputs();
      const data = JSON.stringify(dataPost);
      if (isValid) {
        setLoadingBtn(true);
        const response = await axios.post('https://hijja.sistemtoko.com/public/hijja/web_order', data, { headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' } });
        // setStatusSubmit(response.data.status);
        if (response.data.status === false) {
          setLoadingBtn(false);
          window.alert(`Setelah kami cek Product Habis Silahkan untuk Membeli Product Lain di list Product kami, atau Hubungi di Nomer WA ini untuk ketersedian product ${noHp} `);
          dispatch({ type: 'CART_CLEAR' });
          localStorage.removeItem('cartItems');
          navigate('/product/Lates/all/none');
        } else {
          dispatch({ type: 'CART_CLEAR' });
          localStorage.removeItem('cartItems');
          window.location.href = `https://hijja.sistemtoko.com/i/${response.data.order_code}`;
        }
      }
    } catch (error) {
      console.error('Kesalahan:', error);
      setLoadingBtn(false);
    }
  };
  // useEffect(() => {
  //   if (listCart.length === 0 && !statusSubmit) {
  //     navigate('/');
  //   }
  // }, [listCart, statusSubmit, navigate]);

  return (
    <div>
      <div className="row">
        <div className="col-lg-6 pe-3 pe-md-0 mb-md-5">
          <div className="container   pe-5 ">
            <h5 className="fw-bold fs-5 mt-3">BILINGS DETAILS</h5>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label position-relative fw-bold">
                    Email address <span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input
                    type="email"
                    className={`form-control rounded-0 shadow-none ${!inputValidation.customer_email ? 'border border-danger' : ''}`}
                    id="email"
                    onChange={(e) => setDataPost({ ...dataPost, customer_email: e.target.value })}
                    placeholder="name@example.com"
                    required
                  />
                  {!inputValidation.customer_email ? <p className="text-danger">{errorMessage.customer_email}</p> : ''}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label htmlFor="first" className="form-label position-relative fw-bold">
                    First Name <span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control rounded-0 shadow-none ${!inputValidation.customer_name ? 'border border-danger' : ''}`}
                    id="first"
                    onChange={(e) => setNamaDepan(e.target.value)}
                    placeholder="Nama depan"
                    required
                  />
                  {!inputValidation.customer_name ? <p className="text-danger ">{errorMessage.customer_name}</p> : ''}
                </div>
              </div>
              <div className="col ">
                <div className="mb-3">
                  <label htmlFor="last" className="form-label position-relative fw-bold">
                    Last Name <span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none" id="last" onChange={(e) => setNamaBelakang(' ' + e.target.value)} placeholder="Nama Belakang" required />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label htmlFor="compani" className="form-label position-relative fw-bold">
                    Company name(Opsional)
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none" id="compani" value={dataPost.permalink} placeholder="Sisko" required disabled />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label htmlFor="region" className="form-label position-relative fw-bold">
                    Region / Country<span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none" id="region" value="Indonesia" placeholder="Indonesia" disabled />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label htmlFor="street" className="form-label position-relative fw-bold">
                    Street address<span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control rounded-0 shadow-none ${!inputValidation.delivery_address ? 'border border-danger' : ''}`}
                    id="street"
                    placeholder="Jakarta Regrency"
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, regrency: e.target.value })}
                  />
                  {!inputValidation.delivery_address ? <p className="text-danger">{errorMessage.delivery_address}</p> : ''}
                </div>
              </div>
              <div className="col ">
                <div className="mb-3">
                  <label htmlFor="street2" className="form-label position-relative opacity-0 ">
                    Setreet Adress<span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input type="text" className="form-control rounded-0 shadow-none" id="street2" placeholder="Apartement,suite,unit(opsional)" onChange={(e) => setDeliveryAddress({ ...deliveryAddress, detail: ',' + e.target.value })} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className=" position-relative fw-bold mb-2 ">
                  Provinsis <span className="position-absolute text-danger">*</span>
                </div>
                <div className="input-group mb-3  ">
                  {province && (
                    <select
                      className="form-select rounded-0 shadow-none"
                      id="inputGroupSelect01"
                      onChange={(e) => {
                        setDataPost({ ...dataPost, delivery_province: e.target.value });
                        setProvinceId(e.target.value);
                      }}
                    >
                      <option selected disabled>
                        Pilih provinsi
                      </option>
                      {province?.map((p, i) => (
                        <option key={p.province_id} value={p.province_id}>
                          {p.province}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className=" position-relative fw-bold mb-2">
                  Kota / Kabupaten <span className="position-absolute text-danger">*</span>
                </div>
                <div className="input-group mb-3  ">
                  {city && (
                    <select
                      className="form-select rounded-0 shadow-none"
                      id="inputGroupSelect02"
                      onChange={(e) => {
                        setDataPost({ ...dataPost, delivery_city: e.target.value });
                        setCityId(e.target.value);
                      }}
                      disabled={dataPost.delivery_province === 0}
                    >
                      <option selected disabled>
                        Pilih Kota / Kabupaten
                      </option>
                      {city?.map((c) => {
                        return (
                          <option key={c.city_id} value={c.city_id}>
                            {c.city_name}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className=" position-relative fw-bold mb-2">
                  Kecamataan <span className="position-absolute text-danger">*</span>
                </div>
                <div className="input-group mb-3  ">
                  <select
                    className="form-select rounded-0 shadow-none"
                    id="inputGroupSelect03"
                    onChange={(e) => {
                      setDataPost({ ...dataPost, delivery_district: e.target.value });
                      setSubdistrictId(e.target.value);
                    }}
                    disabled={dataPost.delivery_city === 0}
                  >
                    <option selected disabled>
                      Pilih Kecamatan
                    </option>
                    {subdistrict?.map((s) => {
                      return (
                        <option key={s.subdistrict_id} value={s.subdistrict_id}>
                          {s.subdistrict_name}
                        </option>
                      );
                    })}
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
                  <input type="text" className="form-control rounded-0 shadow-none" id="kodepos" value={city.find((c) => c.city_id === dataPost.delivery_city)?.postal_code || ''} placeholder="Kode Pos" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label position-relative fw-bold">
                    Phone<span className=" position-absolute text-danger ">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-control rounded-0 shadow-none ${!inputValidation.customer_phone ? 'border border-danger' : ''}`}
                    id="phone"
                    onChange={(e) => setDataPost({ ...dataPost, customer_phone: e.target.value, delivery_phone: e.target.value })}
                    placeholder="No Phone"
                    required
                  />
                  {!inputValidation.customer_phone ? <p className="text-danger">{errorMessage.customer_phone}</p> : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <TotalDetail dataCart={listCart} ongkir={ongkir} setDataPost={setDataPost} handleFormSubmit={handleFormSubmit} loadingBtn={loadingBtn} />
        </div>
      </div>
    </div>
  );
}
