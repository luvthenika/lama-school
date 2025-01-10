"use client"
import React from 'react';
import { CiCircleMore } from 'react-icons/ci';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const attendance = [
    { name: 'Mon', present: 25, absent: 5 },
    { name: 'Tue', present: 28, absent: 2 },
    { name: 'Wed', present: 30, absent: 0 },
    { name: 'Thu', present: 27, absent: 3 },
    { name: 'Fri', present: 29, absent: 1 },
];




const AttendanceChart = () => {
    return (
        <div className='bg-white h-full flex flex-col gap-4 items-center rounded-xl w-full'>
            <div className='flex flex-row justify-between w-5/6 mt-4'>
                <h6 className='text-lg text-black font-semibold'>Attendance</h6>
                <span className='text-lg font-bold'><CiCircleMore color='gray' size={32} /></span>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={attendance}

                >

                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} stroke='#F2F2F2'/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" />
                    <Bar
                        legendType="circle"
                        dataKey="present"
                        fill='#FAE27C'
                        radius={[10, 10, 0, 0]}
                        barSize={20}>
                    </Bar>
                    <Bar
                        legendType="circle"
                        dataKey="absent"
                        fill='#C3EAFA'
                        radius={[10, 10, 0, 0]}
                        barSize={20}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};


export default AttendanceChart;
