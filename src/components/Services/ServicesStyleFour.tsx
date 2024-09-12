"use client";

import React from "react";
import Link from "next/link";

const ServicesStyleFour: React.FC = () => {
  return (
    <>
      <div 
        className="solutions-area ptb-110"
        style={{ 
          backgroundImage: `url(/images/solutions-bg.jpg)`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-income"></i>
                </div>
                <h3>
                  <Link href="/services/details">Data Analysts</Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box active">
                <div className="icon">
                  <i className="flaticon-automatic"></i>
                </div>
                <h3>
                  <Link href="/services/details">Automatic Optimization</Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-locked"></i>
                </div>
                <h3>
                  <Link href="/services/details">Security & Surveillance</Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-molecular"></i>
                </div>
                <h3>
                  <Link href="/services/details">
                    Healthcare & Manufacturing
                  </Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-gear"></i>
                </div>
                <h3>
                  <Link href="/services/details">Software Engineers</Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-solutions-box">
                <div className="icon">
                  <i className="flaticon-ceo"></i>
                </div>
                <h3>
                  <Link href="/services/details">IT Professionals</Link>
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyleFour;
