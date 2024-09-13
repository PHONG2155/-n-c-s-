"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination styles
import { Navigation, Pagination } from "swiper/modules";
import RelatedProducts from "../SingleProducts/RelatedProducts";
import ProductsDetailsTab from "../SingleProducts/ProductsDetailsTab";

const SingleProductsContent: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <section className="product-details-area ptb-110">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Swiper slider */}
            <Swiper
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="product-image-slider"
            >
              <SwiperSlide>
                <Image
                  src="/images/shop/nam1.jpg"
                  alt="product"
                  width={800}
                  height={850}
                  style={{ borderRadius: "10px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/shop/nam1.1.jpg"
                  alt="product"
                  width={800}
                  height={850}
                  style={{ borderRadius: "10px" }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/shop/nam1.2.jpg"
                  alt="product"
                  width={800}
                  height={850}
                  style={{ borderRadius: "10px" }}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="col-lg-6">
            <div className="product-details-desc">
              <h3>ÁO SƠ MI NGẮN TAY HỌA TIẾT</h3>

              <div className="price">
                <span className="new-price">320.000 VNĐ</span>
                <span className="old-price">400.000 VNĐ</span>
              </div>
              <p>
               Chọn size
              </p>

              {/* Radio Button Group */}
              <div style={{ display: "flex", gap: "30px" }}>
                {["S", "M", "L"].map((size) => (
                  <label key={size} style={{ textAlign: "center" }}>
                    <input type="radio" name="size" value={size} />
                    <div>{size}</div>
                  </label>
                ))}
              </div>

              <div className="product-add-to-cart" style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                  <button
                    onClick={() => changeQuantity(-1)}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      fontSize: "18px",
                      border: "1px solid #ddd",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    readOnly
                    style={{
                      width: "50px",
                      textAlign: "center",
                      padding: "5px",
                      border: "1px solid #ddd",
                    }}
                  />
                  <button
                    onClick={() => changeQuantity(1)}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      fontSize: "18px",
                      border: "1px solid #ddd",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    +
                  </button>
                </div>

                <div style={{ marginTop: "20px" }}>
                  <button className="btn btn-primary">
                    <i className="fas fa-cart-plus"></i> Thêm vào giỏ hàng
                  </button>
                </div>
              </div>

              <Link href="#" className="btn btn-light" style={{ marginTop: "20px" }}>
                Mua ngay
              </Link>
            </div>
          </div>

          <div className="col-lg-12">
            <ProductsDetailsTab />
          </div>
        </div>
      </div>

      <RelatedProducts />
    </section>
  );
};

export default SingleProductsContent;
