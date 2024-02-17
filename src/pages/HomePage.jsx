import React from "react";
import { products } from "../data/ProductsDetails.js";
import { appContext } from "../context/AppContext";
import { useContext } from "react";
import logo from "../imgs/Logo.png";
import Effects from "../components/Home/Effects.jsx";
import ShoeImgName from "../components/Home/ShoeImgName.jsx";
import ShoeInfo from "../components/Home/Shoe.jsx";

export default function HomePage() {
  let { selectedProduct } = useContext(appContext);
  let product = products[selectedProduct];

  return (
    <div className="w-full  min-h-screen flex justify-center items-center relative overflow-hidden brightness-[0.85] st:h-full st:py-[50px]">
      <img
        src={logo}
        alt="Logo"
        className="w-[120px] absolute top-4 left-[120px] z-50 sm:left-[50%] sm:translate-x-[-50%] "
      />
      <Effects product={product} />
      <div className="w-full h-full flex justify-center items-center z-50">
        <h2 className="text-white text-2xl absolute rotate-90 z-50 top-[20vh] left-0 font-medium sm:-left-10 sm:top-[15vh]">
          2023 / 2024
        </h2>
        <div className=" flex flex-col justify-center items-center gap-[30px] st:mt-[10vh]">
          <ShoeImgName product={product} />
          <ShoeInfo product={product} />
        </div>
        <h2 className="text-white text-2xl absolute rotate-90 z-50 top-[80%] right-0 uppercase font-medium sm:-right-10 sm:top-[15vh]">
          Nike Shoes
        </h2>
      </div>
    </div>
  );
}
