"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface CountdownProps {
  endDate: string; // Format: "Month Day, Year HH:mm:ss"
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const endDateTime = new Date("August 23, 2025 17:00:00 PDT").getTime();
    const now = new Date().getTime();
    const timeRemaining = endDateTime - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <>
      <div className="coming-soon-area">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div
                className="coming-soon-time"
                style={{
                  backgroundImage: `url(/images/coming-soon-bg.jpg)`,
                }}
              >
                <Image
                  src="/images/coming-soon-bg.jpg"
                  alt="image"
                  width={1300}
                  height={900}
                />

                <div id="timer">
                  <div id="days">
                    {countdown.days} <span>Days</span>
                  </div>
                  <div id="hours">
                    {countdown.hours} <span>Hours</span>
                  </div>
                  <div id="minutes">
                    {countdown.minutes} <span>Minutes</span>
                  </div>
                  <div id="seconds">
                    {countdown.seconds} <span>Seconds</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <div className="coming-soon-content">
                <div className="d-table">
                  <div className="d-table-cell">
                    <div className="logo">
                      <Link href="/">
                        <Image
                          src="/images/black-logo.png"
                          alt="logo"
                          width={149}
                          height={37}
                        />
                      </Link>
                    </div>

                    <h3>
                      Our website is Coming Soon, follow us for update now!
                    </h3>

                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email Address"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Subscribe
                      </button>

                      <p>
                        And don’t worry, we hate spam too! You can unsubscribe
                        at anytime.
                      </p>
                    </form>

                    <div className="social">
                      <ul>
                        <li>
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            className="twitter"
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            className="youtube"
                            rel="noreferrer"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            className="facebook"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            className="linkedin"
                            rel="noreferrer"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="instagram.com"
                            target="_blank"
                            className="instagram"
                            rel="noreferrer"
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
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

export default Countdown;
