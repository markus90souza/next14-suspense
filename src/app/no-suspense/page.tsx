import Link from 'next/link'
import { Product } from './components/product'

const NoSuspensePage = () => {
  return (
    <>
      <Link className="mb-4 text-blue-600" href={'/'}>
        Home
      </Link>
      <Product />
    </>
  )
}

export default NoSuspensePage
