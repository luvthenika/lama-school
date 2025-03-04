"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='ml-2 mt-2 font-bold flex justify-center items-center'>
      <Link href="/">
      <span className="hidden lg:block lg:text-3xl">Lama School</span>
      </Link>
    </div>
  )
}

export default Logo
