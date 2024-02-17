import React from 'react'
import { useNavigate } from "react-router-dom";

export default function ShoeDetails({ product }) {
    let navigate = useNavigate();
  return (
    <div className="w-1/2 flex flex-col gap-4 justify-center items-center sm:w-[70%]">
              <h1
                className="text-3xl text-white font-bold capitalize"
                style={{ color: `${product.color2}` }}
              >
                price: {product.price}
              </h1>
              <p
                className="font-medium text-center"
                style={{ color: `${product.color2}` }}
              >
                {product.description}
              </p>
              <button
                className="w-[270px] capitalize py-1 px-3 rounded-md font-medium sm:w-[200px]"
                style={{
                  backgroundColor: `${product.color2}`,
                  color: `${product.color}`,
                }}
                onClick={() =>
                  navigate(`${product.name.part1 + product.name.part2}`)
                }
              >
                order now
              </button>
    </div>
  )
}
