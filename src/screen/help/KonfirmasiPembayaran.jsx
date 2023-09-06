import React, { useEffect, useState } from 'react';

export default function KonfirmasiPembayaran({ page }) {
  const [konfirmasiPembayaran, setKonfirmasiPembayaran] = useState({});

  useEffect(() => {
    setKonfirmasiPembayaran(page[2] || {});
  }, [page]);
  const strippedHtml = konfirmasiPembayaran.page_body ? konfirmasiPembayaran.page_body.replace(/<\/?[^>]+(>|$)/g, '') : '';
  const str = strippedHtml.replace(/&#65279;/g, '');

  return (
    <div>
      <div>
        <div className="container p-3">
          <h1 className="mb-2 mt-2 fs-3">{konfirmasiPembayaran.page_title}</h1>
          <p>{str}</p>
        </div>
      </div>
    </div>
  );
}
