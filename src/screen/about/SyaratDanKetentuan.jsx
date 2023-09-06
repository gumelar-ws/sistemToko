import { useEffect, useState } from 'react';

export default function SyaratDanKetentuan({ page }) {
  const [syaratDanKetentuan, setSyaratDanKetentuan] = useState({});

  useEffect(() => {
    setSyaratDanKetentuan(page[4] || {});
  }, [page]);
  const strippedHtml = syaratDanKetentuan.page_body ? syaratDanKetentuan.page_body.replace(/<\/?[^>]+(>|$)/g, '') : '';
  const str = strippedHtml.replace(/&#65279;/g, '');

  return (
    <div>
      <div className="container p-3">
        <h1 className="mb-2 mt-2 fs-3">{syaratDanKetentuan.page_title}</h1>
        <p>{str}</p>
      </div>
    </div>
  );
}
