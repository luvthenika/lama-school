import React from 'react'
import Schedule from '../components/ScheduleComponent/Schedule'
import { AppButton } from '../components/App-Button/AppButton'

const DashboardPage = () => {
  return (
    <div className='h-full w-full'>
          <Schedule
      daysNumber={5}
      hoursNumber={8}
      date={new Date()}
      weekHeaderBgColor="#f8f9fa"
      weekHeaderTextColor="#333"
      hourColumnBgColor="#ffffff"
      hourColumnTextColor="#000"
      data={[
        { time: "09:00", event: "Meeting", day: 1 },
        { time: "11:00", event: "Workshop", day: 2 },
      ]}
    />
    </div>
  )
}

export default DashboardPage
