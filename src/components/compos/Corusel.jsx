import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "https://tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Library-Sites-Tissot-SharedLibrary/default/dw3b65a2e0/1-HOMEPAGE/1-SQUARE-IMAGE-ASSET/DEKSTOP/Tis-Digital-VD-HP-Watches-For-Him-Desktop.jpg",
  "https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1200/v1711724033/rolexcom/collection/family-pages/classic-watches/datejust/family-page/2024/classic-watches-datejust-iconic-technical-innovations-M126234-0017_2310jva_001-portrait",
  "https://cms.longines.com/uploads/media/homepage-slider-desktop/00/2590-Home%20page%20slider%20master%20collection%20desktop%20.png?v=1-0&w=1200",
  "https://www.tissotwatches.com/on/demandware.static/-/Library-Sites-Tissot-SharedLibrary/default/dw9cea5200/3-STANDALONE-PAGES/1-BRAND-PAGES/Ambassadors/KnowHow_accessorization_1280x1080.jpeg",
  "https://cms.longines.com/uploads/media/categories-cover-desktop/05/2275-Banner_Longines_Spirit_Zulu_Time_desktop.png?v=3-0&w=1200&w=1200",
  "https://frederiqueconstant.com/wp-content/uploads/images/Highlife_Ladies_G1.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 6;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const Corusel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1.5 }}
      className="  relative1 mt-[5px] overflow-hidden md:h-[60vh] md:mx-[70px] "
    >
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab h-[100%] items-start active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      {/* <GradientEdges /> */}
    </motion.div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-[100%] h-[100%] shrink-0 border-2 border-black rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className=" flex w-full justify-center gap-2 m-0 p-0">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-[9px] w-[9px] rounded-full  transition-colors ${
              idx === imgIndex ? "bg-[#112544]" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};
