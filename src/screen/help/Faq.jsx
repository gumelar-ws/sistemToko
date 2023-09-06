import React, { useEffect, useState } from 'react';

export default function Faq({ page }) {
  const [faq, setFaq] = useState({});

  useEffect(() => {
    setFaq(page[1] || {});
  }, [page]);
  const strippedHtml = faq.page_body ? faq.page_body.replace(/<\/?[^>]+(>|$)/g, '') : '';
  const str = strippedHtml.replace(/&#65279;/g, '');

  return (
    <div>
      <div>
        <div className="container p-3">
          <h1 className="mb-2 mt-2 fs-3">{faq.page_title}</h1>
          <p>{str}</p>
        </div>
      </div>
    </div>
  );
}
