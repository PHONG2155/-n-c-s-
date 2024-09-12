"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const PartnerSlider: React.FC = () => {
  return (
    <>
      <div className="partner-section ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>Our Valuable Branding Partner</h2>
          </div>

          <Swiper
            autoHeight={true}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner1.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner2.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner3.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner4.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner5.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner6.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner1.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner2.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner3.png"
                    alt="image"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="dot-shape1">
          <Image
            src="/images/shape/dot1.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="shape-img2">
          <Image
            src="/images/shape/shape2.svg"
            alt="image"
            width={21}
            height={20}
          />
        </div>
        <div className="shape-img4">
          <Image
            src="/images/shape/shape4.svg"
            alt="image"
            width={21}
            height={20}
          />
        </div>
        <div className="shape-img5">
          <Image
            src="/images/shape/shape5.svg"
            alt="image"
            width={22}
            height={22}
          />
        </div>
      </div>
    </>
  );
};

export default PartnerSlider;
