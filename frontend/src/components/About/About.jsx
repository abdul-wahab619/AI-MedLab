import React from "react";
import aboutimg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/* ========== about image ========== */}

            <div className="relative w-3/4 lg:w-1/2 xl:w-[720px] z-10 order-2 lg:order-1">
              <img src={aboutimg} alt="" />
              <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                <img src={aboutCardImg} alt="" />
              </div>
            </div>

            {/* ========== About Content ========== */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
              <h2 className="heading">Proud to be one of the nation best</h2>
              <p className="text__para">
                Proud to be one of the nation's best, we excel in addressing
                diverse healthcare challenges. Our comprehensive approach
                effectively tackles issues from diagnosis to management,
                ensuring patients receive exceptional care and support
                throughout their treatment journey. By integrating advanced
                medical practices with personalized care, we aim to improve
                patient outcomes and quality of life.
              </p>
              <p className="text__para mt-[30px]">
                By integrating advanced medical practices with personalized
                care, we aim to improve patient outcomes and quality of life.
                Our commitment to excellence drives us to continuously innovate
                and provide solutions for even the most complex medical
                conditions.
              </p>
              <Link to="/">
                <button className="btn">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
