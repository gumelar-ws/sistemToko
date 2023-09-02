import React from 'react';
import './styleLineText.css';

export default function LineText({ textLine, line, lineItemNone }) {
  return (
    <div className="container-fluid">
      <div className="text-line">
        <span className={line}>
          <span className={lineItemNone}>{textLine}</span>
        </span>
      </div>
    </div>
  );
}
