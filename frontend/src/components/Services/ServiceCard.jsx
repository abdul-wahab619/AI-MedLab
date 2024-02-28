import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    // Navigate to the corresponding disease page based on the id
    navigate(`/disease/${id}`);
  };

  const { id, name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
        {desc}
      </p>

      <div className="flex items-center justify-between mt-[30px]">
        <div
          onClick={() => handleClick(id)}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none cursor-pointer"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </div>

        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600] 
        "
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {id}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
