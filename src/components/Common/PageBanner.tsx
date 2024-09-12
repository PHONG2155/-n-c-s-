import React from "react";
import Link from "next/link";

interface Props {
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
  activePageText: string;
  bgImg: string;
}

const PageBanner: React.FC<Props> = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
  bgImg,
}) => {
  return (
    <>
      <div className='page-title-area' style={{ 
        backgroundImage: `url(${bgImg})`
      }}>
        <div className="container">
          <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{activePageText}</li>
            </ul>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
