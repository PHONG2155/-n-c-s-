"use client";

import React from "react";
import Link from "next/link";

const YearlyPlan: React.FC = () => {
  return (
    <>
      <div className="tabs-item">
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="single-pricing-box">
              <div className="pricing-header">
                <h3>Free</h3>
                <p>
                  Get your business up <br /> and running
                </p>
              </div>

              <div className="price">
                $0 <span>/Yearly</span>
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

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="single-pricing-box active">
              <div className="pricing-header">
                <h3>Pro</h3>
                <p>
                  Get your business up <br /> and running
                </p>
              </div>

              <div className="price">
                $249 <span>/Yearly</span>
              </div>

              <div className="buy-btn">
                <Link href="/contact" className="btn btn-primary">
                  Start 3 Days Free Trial
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

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="single-pricing-box">
              <div className="pricing-header">
                <h3>Premium</h3>
                <p>
                  Get your business up <br /> and running
                </p>
              </div>

              <div className="price">
                $279 <span>/Yearly</span>
              </div>

              <div className="buy-btn">
                <Link href="/contact" className="btn btn-primary">
                  Start 6 Days Free Trial
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
      </div>
    </>
  );
};

export default YearlyPlan;
