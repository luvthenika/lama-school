"use client"
import React from 'react'
import { CiCircleMore } from "react-icons/ci";

const UserCard = () => {
  return (
    <div className='rounded-lg odd:bg-lavanda even:bg-paleCanary py-4 px-4 h-30 w-full'>
      <div className='flex justify-between items-center gap-4'>
        <span className='bg-white rounded-full text-green-600 text-[10px] py-1 px-1' >2024/2025</span>
        <span className='text-lg'><CiCircleMore color='white'/></span>
      </div>
      <h1 className='text-lg font-semibold mt-2'>1,234</h1>
      <span className='text-sm text-gray-700 font-normal'>students</span>
    </div>
  )
}

export default UserCard
UserCard