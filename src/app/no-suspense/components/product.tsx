'use client'

import { Product as IProduct, getProducts } from '@/data/product'

import { useEffect, useState } from 'react'

export const Product = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    getProducts()
      .then((products) => setProducts(products))
      .catch((e) => {
        console.log(e)
      })
      .finally(() => setIsLoading(false))
  }, [])
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-6 font-extrabold text-green-800 text-3xl underline underline-offset-4">
        Sem Suspense API
      </h1>

      {isLoading && products.length === 0 && (
        <div className="flex items-center">
          <strong className="text-red-600 text-xl ">
            Carrengando produtos
          </strong>
        </div>
      )}

      {!isLoading &&
        products.map((product) => (
          <div className="bg-gray-900 p-8 mb-3 flex flex-col" key={product.id}>
            <span>{product.id}</span>
            <strong>{product.name}</strong>
            <p>{product.description}</p>
          </div>
        ))}
    </div>
  )
}
