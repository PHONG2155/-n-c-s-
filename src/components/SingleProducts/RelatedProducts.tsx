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
              <span>Our Shop</span>
              <h2>Related Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products">
                    <Image
                      src="/images/shop/product1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/product-hover1.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="fas fa-cart-plus"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">White Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$8.50</span>
                    <span className="old">$12.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products">
                    <Image
                      src="/images/shop/product2.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/product-hover2.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="fas fa-cart-plus"></i>
                  </button>

                  <div className="sale-btn">Sale!</div>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">Red Side Book</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$12.50</span>
                    <span className="old">$20.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-product-box">
                <div className="product-image">
                  <Link href="/shop/single-products">
                    <Image
                      src="/images/shop/product3.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                    <Image
                      src="/images/shop/product-hover3.jpg"
                      alt="image"
                      width={800}
                      height={850}
                    />
                  </Link>

                  <button type="button" className="add-to-cart-btn">
                    Add To Cart <i className="fas fa-cart-plus"></i>
                  </button>
                </div>

                <div className="product-content">
                  <h3>
                    <Link href="/shop/single-products">Book With Pen</Link>
                  </h3>
                  <div className="price">
                    <span className="new">$8.50</span>
                    <span className="old">$12.50</span>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
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
