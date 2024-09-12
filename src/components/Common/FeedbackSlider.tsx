"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const FeedbackSlider: React.FC = () => {
  return (
    <>
      <div className="feedback-area">
        <div className="container-flauid p-0">
          <Swiper
            autoHeight={true}
            navigation={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour predefined words which don't
                      look.
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <Image
                          src="/images/clients/client1.jpg"
                          alt="image"
                          width={960}
                          height={700}
                        />
                      </div>

                      <h3>Filip Luis</h3>
                      <span>Founder & CEO</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div
                    className="client-image"
                    style={{
                      backgroundImage: `url(/images/clients/client1.jpg)`,
                    }}
                  >
                    <Image
                      src="/images/clients/client1.jpg"
                      alt="image"
                      width={960}
                      height={700}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour predefined words which don't
                      look.
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <Image
                          src="/images/clients/client2.jpg"
                          alt="image"
                          width={960}
                          height={700}
                        />
                      </div>

                      <h3>Sarah Taylor</h3>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div
                    className="client-image"
                    style={{
                      backgroundImage: `url(/images/clients/client2.jpg)`,
                    }}
                  >
                    <Image
                      src="/images/clients/client2.jpg"
                      alt="image"
                      width={960}
                      height={700}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="row m-0">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour predefined words which don't
                      look.
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <Image
                          src="/images/clients/client3.jpg"
                          alt="image"
                          width={960}
                          height={700}
                        />
                      </div>

                      <h3>Sarah Taylor</h3>
                      <span>Designer</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div
                    className="client-image"
                    style={{
                      backgroundImage: `url(/images/clients/client3.jpg)`,
                    }}
                  >
                    <Image
                      src="/images/clients/client3.jpg"
                      alt="image"
                      width={960}
                      height={700}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
