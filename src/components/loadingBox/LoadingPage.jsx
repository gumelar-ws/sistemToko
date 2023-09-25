import React from 'react';

export default function LoadingPage() {
  return (
    <div>
      <div className="mt-4 text-center ">
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
