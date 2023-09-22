import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://sistemtoko.com/public/hijja',
});

// https://hijja.sistemtoko.com/public/hijja/web_order https://demo.sistemtoko.com/province

// order_json: [{"product_id":28501,"product_name":"Corsa Verde - XL","product_img":"https://hijja.sistemtoko.com/img/user/hijja/product/2n9tb2-edit-img-0160-jpeg.jpeg ","product_price":"625.000","product_qty":1,"product_weight":"300 "}]
// /ongkir?id=126&destination=3653&weight=300
export const apiLocation = axios.create({
  baseURL: 'https://sistemtoko.com',
});
