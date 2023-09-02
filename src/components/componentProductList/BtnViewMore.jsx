import React from 'react';

export default function BtnViewMore({ onClick }) {
  return (
    <div>
      <div className="row">
        <div className="col text-center">
          {' '}
          <div className="btn btn-dark rounded-0" onClick={onClick}>
            VIEW MORE
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
