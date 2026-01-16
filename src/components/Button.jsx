
import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ btnName = "button", btnLink = "#" }) {
  const navigate = useNavigate();

  return (
    <div className="w-[16rem] h-[4rem] border-2 flex justify-center items-center hover:bg-black hover:text-blue-50 transition-all duration-500 ease-out">
      <div>
        <button
          className="
                font-[DM_Sans]
                font-normal
                text-3xl
                hover:cursor-pointer
                "
          onClick={() => navigate(`/${btnLink}`)}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
}

export default Button;
