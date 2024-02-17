import React from 'react'

export default function ShoeInfo({product}) {
  return (
    <div className="w-1/2 h-full relative flex justify-center items-center st:w-full">
          <div className="w-[400px] flex flex-col justify-center items-center sm:w-[80%] gap-2">
            <h1 className="w-full text-6xl text-white font-bold capitalize sm:text-4xl text-start">
              {product.name.part1}
            </h1>
            <img
              src={product.img}
              alt=""
              className="w-full z-50 brightness-[0.9] sm:w-[300px]"
            />
            <h1 className="w-full text-6xl text-white font-bold capitalize sm:text-4xl text-end">
              {product.name.part2}
            </h1>
          </div>
    </div>
  )
}
