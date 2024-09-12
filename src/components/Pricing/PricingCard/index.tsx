"use client";

import React, { useState } from "react";
import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";

const PricingCard: React.FC = () => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  
  return (
    <>
      <div className="pricing-area ptb-110 bg-fafafa">
        <div className="container">
          <div className="tab pricing-tab">
            <ul className="tabs">
              <li
                className={`list ${activeTab === 0 ? "current" : ""}`}
                onClick={() => handleTabClick(0)}
              >
                Monthly Plan
              </li>

              <li
                className={`list ${activeTab === 1 ? "current" : ""}`}
                onClick={() => handleTabClick(1)}
              >
                Yearly Plan
              </li>
            </ul>

            <div className="tab-content">
              {activeTab === 0 && <MonthlyPlan />}
              {activeTab === 1 && <YearlyPlan />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
