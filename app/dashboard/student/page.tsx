"use client"
import StudentSchedule from '@/app/components/StudentSchedule/StudentSchedule'
import React from 'react'

const StudentPage = () => {
  return (
    <div className='w-full flex flex-col gap-5 bg-white'>
      <span className="text-2xl mt-5 font-semibold">Schedule

      </span>
      <StudentSchedule />
    </div>
  )
}

export default StudentPage;
