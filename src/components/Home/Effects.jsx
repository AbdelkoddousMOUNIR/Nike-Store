import React from 'react'

export default function Effects({product}) {
  return (
    <>
      <div
        className="w-1/2 h-full absolute top-0 right-0"
        style={{ backgroundColor: `${product.color}` }}
      ></div>
      <div
        className="w-1/2 h-full opacity-95 absolute top-0 left-0"
        style={{ backgroundColor: `${product.color}` }}
      ></div>
      <div
        className="w-[400px] h-[400px] rounded-full  absolute blur-3xl -top-[200px] -right-[200px] opacity-50 sm:hidden"
        style={{ backgroundColor: `${product.color2}` }}
      ></div>
      <div
        className="w-[400px] h-[400px] rounded-full absolute blur-3xl -bottom-[200px] -left-[200px] opacity-50 sm:hidden"
        style={{ backgroundColor: `${product.color2}` }}
      ></div>
    </>
  )
}
