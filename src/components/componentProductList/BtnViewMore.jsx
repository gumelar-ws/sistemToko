import React from 'react';
import LoadingButton from '../loadingBox/LoadingButton';

export default function BtnViewMore({ onClick, isLoadingMore }) {
  return (
    <div>
      <div className="row">
        <div className="col text-center">
          {' '}
          <div className="btn btn-dark  rounded-0 w-auto" onClick={onClick}>
            VIEW MORE <span>{isLoadingMore ? <LoadingButton /> : ''}</span>
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
