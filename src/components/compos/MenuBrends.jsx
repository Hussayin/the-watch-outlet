import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { watchBrends } from "../Data/WatchData";
const MenuBrends = () => {
  return (
    // <Swiper
    //   // spaceBetween={5}
    //   slidesPerView={3.7}
    //   //   onSlideChange={() => console.log("Slide Change")}
    //   //   onSwiper={(swiper) => console.log(swiper)}
    //   className=" md:hidden block pb-[10px]  mx-[5px] font-kanit dark:bg-white bg-[#0e1629] border-[#1c2c4d] border-[2px]  mt-[10px] rounded-2xl px-[3px] py-[10px] "
    // >
    //   {watchBrends.map((brend) => {
    //     return (
    //       <SwiperSlide key={brend.id}>
    //         <Link
    //           to={brend.link}
    //           className=" flex flex-col justify-center items-center gap-[2px] "
    //         >
    //           <img
    //             src={brend.image}
    //             alt={brend.title}
    //             className={` ${brend.object} border-solid rounded-[50%] p-[5px] h-[90px] w-[90px] text-center dark:bg-white bg-[#0f192b] border-[#1c2c4d] border-[2px] object-contain`}
    //           />
    //           <h1 className=" font-nunito font-bold text-[15px]">
    //             {brend.title}
    //           </h1>
    //         </Link>
    //       </SwiperSlide>
    //     );
    //   })}
    // </Swiper>
    <div className=" flex justify-center items-center flex-wrap gap-[10px] mt-[20px] ">
      {watchBrends.map((brend) => {
        return (
          <div key={brend.id}>
            <Link
              to={brend.link}
              className=" flex flex-col justify-center items-center gap-[2px] "
            >
              <img
                src={brend.image}
                alt={brend.title}
                className={` ${brend.object} border-solid rounded-[50%] p-[5px] h-[90px] w-[90px] text-center dark:bg-white bg-[#0f192b] border-[#1c2c4d] border-[2px] object-contain`}
              />
              <h1 className=" font-nunito font-bold text-[15px]">
                {brend.title}
              </h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MenuBrends;
