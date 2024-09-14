"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Products: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Giả lập thời gian load để hiện animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 2 giây để mô phỏng thời gian tải
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
      <div className="shop-area ptb-110">
        <div className="container">
          <div className="woocommerce-topbar">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-7 col-sm-6">
                <div className="woocommerce-result-count">
                  <p>Showing 1-8 of 14 results</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="woocommerce-topbar-ordering">
                  <select className="form-select">
                    <option value="1">Default sorting</option>
                    <option value="2">Sort by popularity</option>
                    <option value="0">Sort by average rating</option>
                    <option value="3">Sort by latest</option>
                    <option value="4">Sort by price: low to high</option>
                    <option value="5">Sort by price: high to low</option>
                    <option value="6">Sort by new</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* Sản phẩm 1 */}
            <div className="col-lg-4 col-md-6 col-sm-6">
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
                    <Link href="/shop/single-products2">ÁO SƠ MI NGẮN TAY HỌA TIẾT</Link>
                  </h3>
                  <div className="price">
                    <span className="new">320.000 VNĐ</span>
                    <span className="old">400.000 VNĐ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sản phẩm 2 */}
            <div className="col-lg-4 col-md-6 col-sm-6">
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
                    <Link href="/shop/single-products3">ÁO SƠ MI NGẮN TAY MÀU TRẮNG</Link>
                  </h3>
                  <div className="price">
                    <span className="new">310.000 VNĐ</span>
                    <span className="old">380.000 VNĐ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sản phẩm 3 */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products3">
                    <Image
                      src="/images/shop/nam3.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/nam3.1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">ÁO SƠ MI NGẮN TAY MÀU ĐEN</Link>
                  </h3>
                  <div className="price">
                    <span className="new">290.000 VNĐ</span>
                    <span className="old">350.000 VNĐ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sản phẩm 4: XANH BIỂN KẺ */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products4">
                    <Image
                      src="/images/shop/nam4.jpg"
                      alt="XANH BIỂN KẺ"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/nam4.1.jpg"
                      alt="XANH BIỂN KẺ"
                      width={800}
                      height={850}
                    />
                  </Link>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">ÁO SƠ MI NGẮN TAY XANH BIỂN KẺ</Link>
                  </h3>
                  <div className="price">
                    <span className="new">270.000 VNĐ</span>
                    <span className="old">320.000 VNĐ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sản phẩm 5: ÁO SƠ MI NGẮN TAY TRẮNG SAO */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products5">
                    <Image
                      src="/images/shop/nam5.jpg"
                      alt="ÁO SƠ MI NGẮN TAY TRẮNG SAO"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/nam5.1.jpg"
                      alt="ÁO SƠ MI NGẮN TAY TRẮNG SAO"
                      width={800}
                      height={850}
                    />
                  </Link>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">ÁO SƠ MI NGẮN TAY TRẮNG SAO</Link>
                  </h3>
                  <div className="price">
                    <span className="new">280.000 VNĐ</span>
                    <span className="old">320.000 VNĐ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sản phẩm 6: ÁO SƠ MI NGẮN TAY XANH CARO */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products6">
                    <Image
                      src="/images/shop/nam6.jpg"
                      alt="ÁO SƠ MI NGẮN TAY XANH CARO"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/nam6.1.jpg"
                      alt="ÁO SƠ MI NGẮN TAY XANH CARO"
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

            {/* Pagination */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>
                <a href="/shop/page/1" className="page-numbers">
                  1
                </a>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <a href="/shop/page/3" className="page-numbers">
                  3
                </a>
                <a href="/shop/page/4" className="page-numbers">
                  4
                </a>
                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
