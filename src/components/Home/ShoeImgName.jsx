import React from 'react'

export default function ShoeImgName({product}) {
  return (
      <>
          <div className="flex justify-center items-center">
            <div className="relative flex justify-center items-center flex-col gap-4">
              <img
                src={product.img}
                alt=""
                className="w-[350px] brightness-[0.8] sm:w-[300px]"
              />
              <h1 className="text-6xl text-white font-bold capitalize bottom-[80px] -right-[30px] sm:right-[20px] sm:text-5xl sm:bottom-[50px] text-center">
                {product.name.part1 + " " + product.name.part2}
              </h1>
            </div>
          </div>
      </>
  )
}
