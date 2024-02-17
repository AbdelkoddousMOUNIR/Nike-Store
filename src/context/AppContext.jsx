import React, { useState, createContext } from 'react'

export const appContext = createContext(null)

export default function AppContext({ children }) {
  let [selectedProduct, setSelectedProduct] = useState(0)

  let changeProduct = (productNum) => {
    setSelectedProduct(productNum)
  }
  let addOne = () => {
    setSelectedProduct(selectedProduct + 1)
  }
  
  let removeOne = () => {
    setSelectedProduct(selectedProduct - 1)
  }

  let AppContextValues = {
    selectedProduct,
    changeProduct,
    addOne,
    removeOne
  }
  return (
    <appContext.Provider value={AppContextValues}>
        {children}
    </appContext.Provider>
  )
}