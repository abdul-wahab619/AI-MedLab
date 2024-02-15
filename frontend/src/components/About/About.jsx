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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus molestias corrupti a consequuntur? Quos sint ab,
                ducimus odit placeat enim aperiam, at rem dolore, cum
                praesentium. Consequuntur consectetur quisquam sequi.
              </p>
              <p className="text__para mt-[30px]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae, mollitia ut! Voluptatem amet architecto similique.
                Unde cupiditate magni velit molestiae, nihil inventore dolores
                voluptatum corrupti labore minima eaque soluta dolor.
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
