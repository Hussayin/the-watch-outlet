import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiDelete } from "react-icons/ti";
import { MdAddShoppingCart, MdPriceChange } from "react-icons/md";
import {
  FaChevronDown,
  FaChevronLeft,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BsBatteryCharging } from "react-icons/bs";
import { seiko } from "../Data/WatchData";

const images = seiko;

export default function SeikoWatch() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const exchangeRate = 12000; // USD to UZS
  const [openFilter, setOpenFilter] = useState(false);

  //! selected
  const [selectedItem, setselectedItem] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);
  // Active image state
  const [activeImage, setActiveImage] = useState("");
  //! 360
  const [open, setOpen] = useState(false);

  //! for more images
  const [isLoadedd, setIsLoadedd] = useState(false);
  const [selectedImagee, setSelectedImagee] = useState(null);

  const handleProductClick = (product) => {
    setOpenFilter(false);
  };

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  // On component load, set initial active image
  useEffect(() => {
    if (selectedImage) {
      setActiveImage(selectedImage.img); // Default to the first image
    }
  }, [selectedImage]);

  //! toggle
  const toggle = (i) => {
    if (selectedItem === i) {
      return setselectedItem(null);
    }

    setselectedItem(i);
  };

  const filteredImages = images.filter((img) => {
    const isBrandMatch = selectedBrand === "All" || img.brend === selectedBrand;
    const isPriceMatch =
      (!minPrice || img.price >= minPrice) &&
      (!maxPrice || img.price <= maxPrice);
    return isBrandMatch && isPriceMatch;
  });

  return (
    <div className="mt-[0px] mb-[100px] text-white">
      {/* Exit */}
      <div className="fixed border-b-[3px] z-[1000000] bg-[#0f192b] w-[100%] flex top-[0] dark:bg-[#f4f1f1]  py-[10px] px-[10px] ">
        <Link to="/" className="">
          <IoMdArrowRoundBack
            className="  w-[60px]  text-black bg-white rounded-xl p-[3px] "
            size={37}
          />
        </Link>
      </div>
      <div className="flex gap-[13px] dark:bg-[#f4f1f1] bg-[#0f192b] mt-[60px] p-[10px] overflow-x-scroll hide-scrollbar ">
        <button
          onClick={() => setOpenFilter(true)}
          className="px-[15px] py-[5px] rounded-full text-sm font-semibold whitespace-nowrap transition-all bg-blue-500"
        >
          <MdPriceChange className="text-[25px]" />
        </button>
        {[].map((brand) => (
          <button
            key={brand}
            className={` px-[20px] py-[5px] font-kanit text-[17px] rounded-md ${
              selectedBrand === brand ? "bg-blue-500" : "bg-gray-300 text-black"
            }`}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>
      {/* input */}
      {openFilter && (
        <div className=" px-[10px] w-[100%] m-auto mt-[10px] flex justify-center items-center gap-2 mb-[10px]">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="p-2 rounded-md w-[100%] text-black"
          />
          <span>до</span>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="p-2 rounded-md w-[100%] text-black"
          />
        </div>
      )}
      {/* <button
        className="px-4 py-2 mb-4 text-white bg-green-500 rounded-md"
        onClick={() => setCurrency(currency === "USD" ? "UZS" : "USD")}
      >
        {currency}
      </button> */}
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[5px] px-[7px] mt-[10px] ">
        {filteredImages.map((img, index) => (
          <motion.div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className={` dark:border-none flex-col flex items-center justify-center mb-[4px] dark:bg-[#f4f1f1] overflow-hidden transition-all duration-500 ${
              isLoaded ? "blur-0 bg-transparent" : "blur-md bg-transparent "
            } `}
          >
            <img
              onLoad={() => setIsLoaded(true)}
              src={img.mainImage}
              alt="image-product-car"
              className="h-[170px] w-[100%] object-cover border-[3px] border-[#515151] rounded-[10px] "
            />
            <h1>{img.price}$</h1>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-[#000000e0] opacity-40 z-[1111111111] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative w-[100%] mb-[90px] items-center justify-center px-[10px] pt-[20px] rounded-lg shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute p-1  text-white bg-gray-800 rounded-full top-[-50px] right-[45%] "
                  onClick={() => setSelectedImage(null)}
                >
                  <TiDelete size={35} />
                </button>
                <img
                  src={selectedImage.mainImage}
                  alt="Selected"
                  className=" w-[100%] object-contain m-auto "
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
