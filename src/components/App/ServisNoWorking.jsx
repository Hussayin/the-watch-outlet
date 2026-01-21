import React from "react";

const ServisNoWorking = () => {
  return (
    <div className=" w-[95%] m-auto flex justify-center items-center flex-col">
      {/* image */}
      <div className=" mt-[150px] ">
        <img
          src="/logo-img-mainn.png"
          alt=""
          className=" h-[200px] rounded-xl "
        />
      </div>
      {/* text about */}
      <div className=" mt-[20px] ">
        <h1 className=" text-[20px] text-center font-nunito ">
          Сайт временно недоступен На сайте ведутся технические работы.
          Пожалуйста, зайдите позже
        </h1>
      </div>
      {/* links */}
      <div className=" mt-[30px] flex-col flex justify-center items-center gap-[30px] ">
        <div className=" text-center ">
          <a
            className=" border-white border-[2px] py-[8px] px-[55px] bg-white text-black font-bold font-nunito rounded-[7px]  "
            target="_blank"
            href="https://t.me/Bekhruz777"
          >
            Telegram (Adnim)
          </a>
        </div>
        <div className=" text-center ">
          <a
            className=" border-white border-[2px] py-[8px] px-[55px] bg-white text-black font-bold font-nunito rounded-[7px]  "
            target="_blank"
            href="https://www.instagram.com/bekhruz_watch"
          >
            Instagram
          </a>
        </div>
        <div className=" text-center ">
          <a
            className=" border-white border-[2px] py-[8px] px-[55px] bg-white text-black font-bold font-nunito rounded-[7px]  "
            target="_blank"
            href="https://t.me/thewatchoutlet"
          >
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServisNoWorking;
