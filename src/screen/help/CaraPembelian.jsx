import React, { useEffect, useState } from 'react';

export default function CaraPembelian({ page }) {
  const [caraPembelian, setCaraPembelian] = useState({});

  useEffect(() => {
    setCaraPembelian(page[0] || {});
  }, [page]);
  const strippedHtml = caraPembelian.page_body ? caraPembelian.page_body.replace(/<\/?[^>]+(>|$)/g, '') : '';
  const str = strippedHtml.replace(/&#65279;/g, '');

  return (
    <div>
      <div>
        <div className="container p-3">
          <h1 className="mb-2 mt-2 fs-3">{caraPembelian.page_title}</h1>
          <p>{str}</p>
        </div>
      </div>
    </div>
  );
}
