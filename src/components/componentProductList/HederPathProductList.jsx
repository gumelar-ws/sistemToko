import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HederPathProductList({
  content1,
  content2,
  content3,
  content4,
  content5,
  content1Style,
  content2Style,
  content3Style,
  content4Style,
  content5Style,
  from,
  to,
  total,
  value,
  categories,
  search_name,
  setPages,
  display,
}) {
  const navigate = useNavigate();
  const handelChange = (e) => {
    const newSorting = e.target.value;
    setPages(1);
    navigate(`/product/${newSorting}/${categories}/${search_name}`);
  };
  return (
    <div>
      <div className="row ms-0  mt-3 mb-5 w-100">
        <div className="col-sm-6 text-start">
          <div className="mt-2 mb-2 text-dark">
            <span className={content1Style}>{content1} </span>
            <span className={content2Style}>&#47; {content2} </span>
            <span className={content3Style}>&#47; {content3} </span>
            <span className={content4Style}>&#47; {content4} </span>
            <span className={content5Style}>&#47; {content5} </span>
          </div>
        </div>
        <div className={`col d-flex justify-content-end justify  me-5 me-sm-0 ms-sm-0 ${display}`}>
          <span className="me-3">{`Showing ${from}-${to} of ${total} return`}</span>
          <div className=" me-4">
            <select value={value} onChange={handelChange}>
              <option value="" disabled>
                Sorted By
              </option>
              <option value="Lates">Newest</option>
              <option value="cheapest">Price: Low to High</option>
              <option value="expensive"> Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
