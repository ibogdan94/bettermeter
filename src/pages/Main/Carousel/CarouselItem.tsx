import React, {FC} from 'react';
import MoreActions from './MoreActions';
import {Avatar} from '@material-ui/core';

const CarouselItem: FC = (): JSX.Element => {
  return (
    <div className="statistic-card">
      <div className="card-content">
        <div className="card-header">
          <h3>Most Active Sites</h3>
          <MoreActions />
        </div>
        <div className="drop-item small light-bg">
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
        <div className="data-row">
          <div className="data-name">
            <Avatar className="avatar-orange">GL</Avatar>
            <span className="user-name">Glyphy</span>
          </div>
          <span className="data-value">6,648</span>
        </div>
        <div className="data-row">
          <div className="data-name">
            <Avatar className="avatar-blue">DS</Avatar>
            <span className="user-name">DesignStripe</span>
          </div>
          <span className="data-value">1,374</span>
        </div>
        <div className="data-row">
          <div className="data-name">
            <Avatar className="avatar-pink">DV</Avatar>
            <span className="user-name">DesignValley</span>
          </div>
          <span className="data-value">20,748</span>
        </div>
        <div className="data-row">
          <div className="data-name">
            <Avatar className="avatar-green">DK</Avatar>
            <span className="user-name">Neueubel</span>
          </div>
          <span className="data-value">32,884</span>
        </div>
        <div className="data-row">
          <div className="data-name">
            <Avatar className="avatar-blue">DS</Avatar>
            <span className="user-name">Last Year</span>
          </div>
          <span className="data-value">182,874</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
