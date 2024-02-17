import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { appContext } from "../../context/AppContext.jsx";
import { useContext } from "react";
import { products } from "../../data/ProductsDetails.js";
import ShoeDetails from "./ShoeDetails.jsx";

export default function ShoeInfo({ product }) {
  let { selectedProduct, addOne, removeOne } = useContext(appContext);
  return (
    <>
      <div className="flex justify-center gap-7 sm:gap-2">
        <div
          className="w-[40px] h-[60px] rounded-full cursor-pointer z-50 flex justify-center items-center"
          style={{
            backgroundColor: `${product.color2}`,
            opacity: `${selectedProduct > 0 ? "1" : "0.2"}`,
          }}
          onClick={() => {
            if (selectedProduct > 0) {
              removeOne();
            } else {
              return null;
            }
          }}
        >
          <FaChevronLeft
            className="text-2xl"
            style={{ color: `${product.color}` }}
          />
        </div>
        <ShoeDetails product={product} />
        <div
          className="w-[40px] h-[60px] rounded-full cursor-pointer z-50 flex items-center justify-center"
          style={{
            backgroundColor: `${product.color2}`,
            opacity: `${selectedProduct < products.length - 1 ? "1" : "0.2"}`,
          }}
          onClick={() => {
            if (selectedProduct < products.length - 1) {
              addOne();
            } else {
              return null;
            }
          }}
        >
          <FaChevronRight
            className="text-2xl"
            style={{ color: `${product.color}` }}
          />
        </div>
      </div>
    </>
  );
}
