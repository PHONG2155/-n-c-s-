"use client";

import React from "react";
import Link from "next/link";

const MonthlyPlan: React.FC = () => {
  return (
    <>
      <div className="row justify-content-center">
        {/* Single pricing table */}
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="single-pricing-box">
            <div className="pricing-header">
              <h3>Free</h3>
              <p>
                Get your business up <br /> and running
              </p>
            </div>

            <div className="price">
              $0 <span>/Monthly</span>
            </div>

            <div className="buy-btn">
              <Link href="/contact" className="btn btn-primary">
                Get Started Free
              </Link>
            </div>

            <ul className="pricing-features">
              <li>
                <i className="flaticon-tick"></i> Drag & Drop Builder
              </li>
              <li>
                <i className="flaticon-tick"></i> Lead Generation & Sales
              </li>
              <li>
                <i className="flaticon-tick"></i> Boot & Digital Assistants
              </li>
              <li>
                <i className="flaticon-tick"></i> Customer Service
              </li>
              <li>
                <i className="fas fa-times"></i> Up to 1000 Subscribers
              </li>
              <li>
                <i className="fas fa-times"></i> Unlimited Broadcasts
              </li>
              <li>
                <i className="fas fa-times"></i> Landing Pages & Web Widgets
              </li>
            </ul>
          </div>
        </div>

        {/* Single pricing table */}
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="single-pricing-box active">
            <div className="pricing-header">
              <h3>Pro</h3>
              <p>
                Get your business up <br /> and running
              </p>
            </div>

            <div className="price">
              $149 <span>/Monthly</span>
            </div>

            <div className="buy-btn">
              <Link href="/contact" className="btn btn-primary">
                Get Started Free
              </Link>
            </div>

            <ul className="pricing-features">
              <li>
                <i className="flaticon-tick"></i> Drag & Drop Builder
              </li>
              <li>
                <i className="flaticon-tick"></i> Lead Generation & Sales
              </li>
              <li>
                <i className="flaticon-tick"></i> Boot & Digital Assistants
              </li>
              <li>
                <i className="flaticon-tick"></i> Customer Service
              </li>
              <li>
                <i className="flaticon-tick"></i> Up to 1000 Subscribers
              </li>
              <li>
                <i className="fas fa-times"></i> Unlimited Broadcasts
              </li>
              <li>
                <i className="fas fa-times"></i> Landing Pages & Web Widgets
              </li>
            </ul>
          </div>
        </div>

        {/* Single pricing table */}
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <div className="single-pricing-box">
            <div className="pricing-header">
              <h3>Premium</h3>
              <p>
                Get your business up <br /> and running
              </p>
            </div>

            <div className="price">
              $179 <span>/Monthly</span>
            </div>

            <div className="buy-btn">
              <Link href="/contact" className="btn btn-primary">
                Get Started Free
              </Link>
            </div>

            <ul className="pricing-features">
              <li>
                <i className="flaticon-tick"></i> Drag & Drop Builder
              </li>
              <li>
                <i className="flaticon-tick"></i> Lead Generation & Sales
              </li>
              <li>
                <i className="flaticon-tick"></i> Boot & Digital Assistants
              </li>
              <li>
                <i className="flaticon-tick"></i> Customer Service
              </li>
              <li>
                <i className="flaticon-tick"></i> Up to 1000 Subscribers
              </li>
              <li>
                <i className="flaticon-tick"></i> Unlimited Broadcasts
              </li>
              <li>
                <i className="flaticon-tick"></i> Landing Pages & Web Widgets
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthlyPlan;
