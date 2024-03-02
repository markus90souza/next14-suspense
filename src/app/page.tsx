import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Link
        className="p-4 bg-red-500 rounded-lg hover:bg-red-600"
        href={'no-suspense'}
      >
        SEM SUSPENSE API
      </Link>
      <Link
        className="p-4 bg-green-500 rounded-lg hover:bg-green-600"
        href={'suspense'}
      >
        COM SUSPENSE API
      </Link>
    </div>
  )
}

export default HomePage
