"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

const Webinar: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="webinar-area">
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div className="webinar-content">
              <h2>Check Out Our Latest Webinar</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage.
              </p>

              <Link href="#" className="btn btn-primary">
                Watch More
              </Link>
            </div>
          </div>

          <div className="col-lg-6 p-0">
            <div
              className="webinar-video-image"
              style={{
                backgroundImage: `url(/images/woman.jpg)`,
              }}
            >
              <Image
                src="/images/woman.jpg"
                alt="image"
                width={532}
                height={398}
              />

              <div
                onClick={() => setToggler(!toggler)}
                className="video-btn popup-youtube"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <i className="flaticon-play-button"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webinar;
