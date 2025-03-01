import React, { useContext } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuAll from "./MenuAll";
import { BasketContext } from "../context/BasketContext";

const Basket = () => {
  const { cart } = useContext(BasketContext);

  return (
    <div>
      {/* back */}
      <div className="fixed w-[100%] top-0 z-[10000000] dark:bg-white dark:border-black bg-[#0f192b] border-[#cecccc85] border-solid border-b-[1px] p-[15px] px-[20px]">
        <Link to="/">
          <h1 className="flex items-center gap-[2px] font-bold font-nunito text-[17px]">
            <FaChevronLeft className="text-[25px]  " /> назад
          </h1>
        </Link>
      </div>
      <div className=" mb-[90px] px-[10px] mt-[80px] flex justify-center items-center flex-col gap-[10px] ">
        {/* products */}
        {cart.map((watch) => {
          return (
            <div
              key={watch.id}
              className=" flex justify-start gap-[10px] border-[1px] w-[100%] border-solid rounded-xl border-white p-[5px] items-center"
            >
              <img
                src={watch.mainImage}
                alt={watch.allTitle}
                className="h-[110px]"
              />
              <h1 className="text-[17px] font-nunito">{watch.allTitle}</h1>
            </div>
          );
        })}
      </div>
      <MenuAll />
    </div>
  );
};

export default Basket;
