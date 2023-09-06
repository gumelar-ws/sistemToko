import { useEffect, useState } from 'react';

export default function About({ page }) {
  const [about, setAbout] = useState({});

  useEffect(() => {
    setAbout(page[3] || {});
  }, [page]);
  const strippedHtml = about.page_body ? about.page_body.replace(/<\/?[^>]+(>|$)/g, '') : '';
  const str = strippedHtml.replace(/&#65279;/g, '');

  return (
    <div>
      <div className="container p-3">
        <h1 className="mb-2 mt-2 fs-3">{about.page_title}</h1>
        <p>{str}</p>
      </div>
    </div>
  );
}
