"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const RelatedProducts: React.FC = () => {
  return (
    <>
      <div className="related-products">
        <div className="container">
          <div className="section-title">
            <div className="content">
             
              
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products">
                    <Image
                      src="/images/shop/nam1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/nam1.1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">ÁO SƠ MI NGẮN TAY HỌA TIẾT</Link>
                  </h3>
                  <div className="price">
                    <span className="new">320.000 VNĐ</span>
                    <span className="old">400.000 VNĐ</span>
                  </div>
              
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products2">
                    <Image
                      src="/images/shop/nam2.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/nam2.1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  

               
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">ÁO SƠ MI NGẮN TAY TRẮNG</Link>
                  </h3>
                  <div className="price">
                    <span className="new">310.000 VNĐ</span>
                    <span className="old">380.000 VNĐ</span>
                  </div>
                 
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products6">
                    <Image
                      src="/images/shop/nam6.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/nam6.1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">ÁO SƠ MI NGẮN TAY XANH CARO</Link>
                  </h3>
                  <div className="price">
                    <span className="new">300.000 VNĐ</span>
                    <span className="old">360.000 VNĐ</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
