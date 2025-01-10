"use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useMemo, useState } from 'react';
import events from "@/lib/events"
import '../../ui/globals.css'


const localizer = momentLocalizer(moment)



const StudentSchedule = () => 
    {

    const [view, setView] = useState<View>(Views.WORK_WEEK);
    const defaultDate = useMemo(() => new Date(Date.now()), [])
    const handleViewChange = (view: View) => {
        setView(view);
    }
    return (
        <div className='h-full w-full'>
        <Calendar
            localizer={localizer}
            defaultDate={new Date(2025 , 0 , 6)}
            defaultView="month"
            style={{ height: "100vh" , width: "100vh"}}
            views={["work_week", "day"]}
            onView={handleViewChange}
            events={events}
            view={view}
            min={new Date(new Date().getFullYear(), new Date().getDate() , new Date().getMonth() , 8 ,0 )}
            max={new Date(new Date().getFullYear(), new Date().getDate() , new Date().getMonth() , 20,0 )}
           
            />
            </div>
    )

}
export default StudentSchedule;