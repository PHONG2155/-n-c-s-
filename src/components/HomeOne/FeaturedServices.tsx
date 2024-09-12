"use client";

import React from "react";
import Link from "next/link";
import { BiMale } from 'react-icons/bi';
import { BiFemale } from 'react-icons/bi';

const FeaturedServices: React.FC = () => {
  return (
    <>
      <div className="featured-services-area">
        <div className="container">
          <div className="row justify-content-center">
            <div 
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="single-featured-services-box">
                

                <h3>
                  <Link href="/shop">
                  Thời Trang Nam
                  <p>list thời trang dành cho phái mạnh </p>
                  <BiMale size={60} color="White" />
                  </Link>
                
                </h3>
               
                
              </div>
            </div>

            <div 
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="single-featured-services-box">
              
                

                <h3>
                  <Link href="/shop">
                  Thời Trang Nữ
                  <p>list thời trang dành cho phái đẹp </p>
                  <BiFemale size={60} color="White" />
                  </Link>
                </h3>
              </div>
            </div>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default FeaturedServices;
