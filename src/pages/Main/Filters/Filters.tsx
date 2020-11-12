import React from 'react';
import DateRangePicker from '../../../shared/components/DateRangePicker';

const Filters = (): JSX.Element => {
  return (
    <div className="filters">
      <h1 className="page-heading">Analytics</h1>
      <div className="filter-items">
        <div className="drop-item">
          <div className="drop-header">
            <span className="drop-label">Sites:</span>
            <span className="selected-option">All</span>
          </div>
          <div className="dropdown-select">
            <ul>
              <li className="disabled">
                <span className="dot-item">DrawKit.io</span>
              </li>
              <li className="disabled">
                <span className="dot-item">DesignStripe</span>
              </li>
              <li>
                <span className="dot-item">Glyphy.io</span>
              </li>
              <li className="disabled">
                <span className="dot-item">Designvalley.club</span>
              </li>
              <li className="disabled">
                <span className="dot-item">Neubel</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="drop-item">
          <div className="drop-header">
            <span className="drop-label">Events:</span>
            <span className="selected-option">All</span>
          </div>
          <div className="dropdown-select">
            <ul>
              <li className="disabled">
                <span className="dot-item">DrawKit.io</span>
              </li>
              <li className="disabled">
                <span className="dot-item">DesignStripe</span>
              </li>
              <li>
                <span className="dot-item">Glyphy.io</span>
              </li>
              <li className="disabled">
                <span className="dot-item">Designvalley.club</span>
              </li>
              <li className="disabled">
                <span className="dot-item">Neubel</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="drop-item calendar light-bg">
          <div className="drop-header">
            <span className="drop-label">
              <img src="./images/datepicker.svg" alt="" />
              Date:
            </span>
            <span className="selected-option">Aug 7 - Aug 15 2020</span>
          </div>
          <div className="dropdown-select">
            <DateRangePicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
