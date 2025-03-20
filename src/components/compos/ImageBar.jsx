import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiDelete } from "react-icons/ti";
import { MdPriceChange } from "react-icons/md";
import { OldWatches } from "../Data/WatchData";

const images = OldWatches;

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const exchangeRate = 12000; // USD to UZS

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const filteredImages = images.filter((img) => {
    const isBrandMatch = selectedBrand === "All" || img.brend === selectedBrand;
    const isPriceMatch =
      (!minPrice || img.price >= minPrice) &&
      (!maxPrice || img.price <= maxPrice);
    return isBrandMatch && isPriceMatch;
  });

  return (
    <div className="mt-[0px] mb-[100px] text-white">
      <div className="flex gap-[13px]  p-[10px] overflow-x-scroll hide-scrollbar ">
        {[
          "All",
          "Tissot",
          "Oris",
          "Rolex",
          "Hamilton",
          "Raymon",
          "Orient",
          "Brentling",
          "Perele",
        ].map((brand) => (
          <button
            key={brand}
            className={` px-[20px] py-[5px] font-nunito text-[17px] rounded-md ${
              selectedBrand === brand ? "bg-blue-500" : "bg-gray-300 text-black"
            }`}
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>
      {/* input */}
      <div className=" px-[10px] w-[100%] m-auto  flex justify-center items-center gap-2 mb-4">
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
      {/* <button
        className="px-4 py-2 bg-green-500 text-white rounded-md mb-4"
        onClick={() => setCurrency(currency === "USD" ? "UZS" : "USD")}
      >
        {currency}
      </button> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
        {filteredImages.map((img, index) => (
          <div key={img.id}>
            <motion.img
              src={img.img}
              alt={`Image ${index}`}
              className="cursor-pointer rounded-lg shadow-md w-[100%] object-cover h-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(img)}
            />
            <h1>{img.title}</h1>
            {/* price */}
            <h1 className=" text-white">{img.price}$</h1>
            {/* <h1>
              {currency === "USD"
                ? `$${img.price}`
                : `${img.price * exchangeRate} UZS`}
            </h1> */}
          </div>
        ))}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black z-[1000000000] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative bg-white p-2 rounded-lg shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <TiDelete size={24} />
                </button>
                <img
                  src={selectedImage.img}
                  alt="Selected"
                  className="max-w-[90vw] max-h-[80vh] rounded-lg"
                />
                <h1 className="text-black text-center mt-2">
                  {selectedImage.title}
                </h1>
                {/* price */}
                <h1 className=" text-black">{selectedImage.price}$</h1>
                {/* Price and valuto calqulator */}
                <h1 className=" hidden text-black text-center mt-2">
                  {currency === "USD"
                    ? `$${selectedImage.price}`
                    : `${selectedImage.price * exchangeRate} UZS`}
                </h1>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
