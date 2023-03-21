import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center px-12 py-4'>
      <p className='text-secondary-600 text-3xl'>{`</>`}</p>
      <div>
        <Link href="/" className='text-primary-600 mr-4 text-lg'>
          Sign up
        </Link>
        <Link href="/about" className='text-white bg-secondary-600 px-6 py-2 rounded text-lg'>
          Login
        </Link>
      </div>
    </div>
  )
}

export default Navbar