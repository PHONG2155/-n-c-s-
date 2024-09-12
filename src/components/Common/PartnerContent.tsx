"use client";

import React from "react";
import Image from "next/image";

const PartnerContent: React.FC = () => {
  return (
    <>
      <div className="partner-area ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>Featured Customers & Partners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="customers-partner-list">
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/partner1.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/partner2.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/partner3.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/partner4.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/partner5.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/partner6.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/partner1.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/partner2.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="900"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <Image
                  src="/images/partner/partner3.png"
                  alt="image"
                  width={200}
                  height={60}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerContent;
