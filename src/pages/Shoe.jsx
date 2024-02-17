import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/ProductsDetails.js";
import logo from "../imgs/Logo.png";
import ShoeInfo from "../components/Shoe/ShoeInfo.jsx";
import Form from "../components/Shoe/Form.jsx";

export default function Shoe() {
  let { ShoeName } = useParams();
  console.log(ShoeName);
  let product = products.filter((shoe) =>
    shoe.name.part1 + shoe.name.part2 === ShoeName ? shoe : null
  )[0];

  return (
    <div
      className="w-full min-h-screen brightness-[0.85] pb-10"
      style={{ backgroundColor: `${product.color}` }}
    >
      <header className="p-[20px] flex justify-center items-center">
        <img src={logo} alt="" className="w-[120px]" />
      </header>
      <div className="w-full h-full relative flex brightness-[0.85] st:flex-col pb-10 gap-[40px] justify-center items-center mt-5">
        <ShoeInfo product={product}/>
        <Form product={product}/>
      </div>
    </div>
  );
}
