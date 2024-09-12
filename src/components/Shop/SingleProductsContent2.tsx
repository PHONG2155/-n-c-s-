"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RelatedProducts from "../SingleProducts/RelatedProducts";
import ProductsDetailsTab from "../SingleProducts/ProductsDetailsTab2";

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
            <Image
              src="/images/shop/7.jpg"
              alt="product"
              width={800}
              height={850}
            />
          </div>

          <div className="col-lg-6">
            <div className="product-details-desc">
              <h3>Sách lỏ </h3>

              <div className="price">
                <span className="new-price">$14.00</span>
                <span className="old-price">$20.00</span>
              </div>

              <div className="product-review">
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <Link href="#" className="rating-count">
                  3 reviews
                </Link>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                    <i className="fas fa-cart-plus"></i> Add to Cart 2
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
