"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <>
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
              
                <Image
                  src="/images/Banner/bn1.webp"
                  alt="image"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  width={360}
                  height={300}
                  style={{ borderRadius: '15px' }}
                  
                />
                <Image
                  src="/images/Banner/nu1.webp"
                  alt="image"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  width={360}
                  height={300}
                  style={{ borderRadius: '15px' }}
                />
              
            </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <h2>Chúng tôi luôn lắng nghe bạn ê ê ê ê </h2>
                <p>
                “Sản phẩm luôn mới, chất lượng hàng đầu, giá cả hợp lý, mang đến cho bạn sự lựa chọn hoàn hảo. Hãy đến với chúng tôi để khám phá những bộ sưu tập thời trang mới nhất với mức giá ưu đãi nhất.”
                </p>
               

                <Link href="/shop" className="btn btn-primary">
                  Mua sắm 
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={523}
            height={586}
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
        <div className="shape-img3">
          <Image
            src="/images/shape/shape3.png"
            alt="image"
            width={202}
            height={202}
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
        <div className="shape-img6">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={182}
            height={146}
          />
        </div>
        <div className="dot-shape1">
          <Image
            src="/images/shape/dot1.png"
            alt="image"
            width={15}
            height={15}
          />
        </div>
        <div className="dot-shape2">
          <Image
            src="/images/shape/dot2.png"
            alt="image"
            width={12}
            height={11}
          />
        </div>
      </section>
    </>
  );
};

export default About;
