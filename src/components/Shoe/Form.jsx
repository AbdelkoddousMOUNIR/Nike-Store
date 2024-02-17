import React from 'react'

export default function Form({product}) {
  return (
    <form className="w-1/2 h-full flex flex-col justify-center items-center gap-7 st:w-full">
          <input
            type="text"
            placeholder="Fll Name"
            className="w-[400px] px-3 py-2 bg-transparent outline-none border-2 rounded-sm placeholder:text-white sm:w-[80%]"
            style={{
              color: `${product.color2}`,
              borderColor: `${product.color2}`,
            }}
          />
          <input
            type="text"
            placeholder="Fll Name"
            className="w-[400px] px-3 py-2 bg-transparent outline-none border-2 rounded-sm placeholder:text-white sm:w-[80%]"
            style={{
              color: `${product.color2}`,
              borderColor: `${product.color2}`,
            }}
          />
          <div className="w-[400px] flex justify-between items-center sm:w-[80%]">
            <select
              name="taills"
              id=""
              className="w-[45%] px-3 py-2 outline-none border-2 rounded-sm font-medium"
              style={{
                color: `${product.color}`,
                borderColor: `${product.color2}`,
              }}
            >
              <option value="0">Select Size</option>
              <option value="1">40</option>
              <option value="2">41</option>
              <option value="3">42</option>
              <option value="4">43</option>
              <option value="5">44</option>
            </select>
            <select
              name="countity"
              id=""
              className="w-[45%] px-3 py-2 outline-none border-2 rounded-sm font-medium"
              style={{
                color: `${product.color}`,
                borderColor: `${product.color2}`,
              }}
            >
              <option value="0">Countity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Adress :"
            className="w-[400px] px-3 py-2 bg-transparent outline-none border-2 rounded-sm placeholder:text-white sm:w-[80%]"
            style={{
              color: `${product.color2}`,
              borderColor: `${product.color2}`,
            }}
          ></textarea>
          <button
            type="submit"
            className="w-[400px] px-3 py-2 outline-none rounded-sm font-medium sm:w-[80%]"
            style={{
              color: `${product.color}`,
              backgroundColor: `${product.color2}`,
            }}
          >
            Send Order
          </button>
        </form>
  )
}
