import { getProducts } from '@/data/product'
import Link from 'next/link'

import { Suspense } from 'react'

const Products = async () => {
  const products = await getProducts()
  return (
    <>
      {products.map((product) => (
        <div className="bg-gray-900 p-8 mb-3 flex flex-col" key={product.id}>
          <span>{product.id}</span>
          <strong>{product.name}</strong>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  )
}

export const Product = async () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-6 font-extrabold text-green-800 text-3xl underline underline-offset-4">
        Com Suspense API
      </h1>

      <Suspense
        fallback={
          <div className="flex items-center">
            <strong className="text-red-600 text-xl ">
              Carrengando produtos
            </strong>
          </div>
        }
      >
        <Link className="mb-4 text-blue-600" href={'/'}>
          Home
        </Link>
        <Products />
      </Suspense>
    </div>
  )
}
