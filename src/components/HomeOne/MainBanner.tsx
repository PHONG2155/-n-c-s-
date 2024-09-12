"use client";

import React from "react";
import Link from "next/link";
import FeaturedServices from "./FeaturedServices";

const MainBanner: React.FC = () => {
  return (
    <>
      <div 
        className="main-banner"
        style={{ 
          backgroundImage: `url(/images/Banner/mainbn.webp)`
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="main-banner-content">
                {/* <h1
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                Shop Thời Trang
                </h1> */}

                {/* <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Ở đây có bán đồ đẹp nhưng mắc 
                </p> */}
{/* 
                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <Link href="/shop" className="btn btn-primary">
                  Đi tới mua sắm
                  </Link>

                  
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <FeaturedServices />
      </div>
    </>
  );
};

export default MainBanner;
