import AnnouncementBoard from '@/app/components/AnnoncementBoard/AnnouncementBoard'
import AttendanceChart from '@/app/components/AttendanceChart/AttendanceChart'
import EventCalendar from '@/app/components/EventCalendar/EventCalendar'
import FinanceChart from '@/app/components/FinanceChart/FinanceChart'
import GenderChart from '@/app/components/GenderChart/GenderChart'
import UserCard from '@/app/components/UserCard/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between gap-10 w-3/4'>
      <div className='flex flex-col gap-4 items-center lg:items-start lg:ml-5 lg:mr-5 h-auto w-full'>
        <div className='flex flex-col gap-4 lg:flex-row h-auto w-5/6 lg:w-full my-6'>
          <div className='flex flex-col gap-4 sm:flex-row w-full h-auto'>
            <UserCard></UserCard>
            <UserCard></UserCard>
          </div>
          <div className='flex flex-col gap-4 sm:flex-row w-full h-auto'>
            <UserCard></UserCard>
            <UserCard></UserCard>
          </div>
        </div>
        <div className='flex flex-col w-5/6 h-full lg:w-full md:h-2/3 items-center gap-7 mb-6'>
        <div className='flex flex-col w-full h-auto xl:flex-row gap-7'>
          <div className='w-full h-96 xl:w-1/3'>
            <GenderChart />
          </div>
          <div className='w-full h-96 xl:w-2/3'>
            <AttendanceChart />
          </div>
        </div>
        <div className='w-full h-96'>
          <FinanceChart />
        </div>
        </div>
        
      </div>
      <div className='w-full lg:w-2/3 h-full flex flex-col items-center bg-gray-100'>
        <div className='h-full md:h-1/3 w-full'>
            <EventCalendar/>
        </div>
        <div className='h-full md:h-1/4 w-full'>
            <AnnouncementBoard/>
        </div>
        
      </div>
    </div>
  )
}

export default AdminPage
