"use client";

import React from "react";

const AdditionalInformation: React.FC = () => {
  return (
    <>
      <div className="tabs_item">
        <div className="products-details-tab-content">
          <ul className="additional-information">
            <li>
              <span>Brand:</span> ThemeForest
            </li>
            <li>
              <span>Color:</span> Brown
            </li>
            <li>
              <span>Size:</span> Large, Medium
            </li>
            <li>
              <span>Weight:</span> 27 kg
            </li>
            <li>
              <span>Dimensions:</span> 16 x 22 x 123 cm
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdditionalInformation;
