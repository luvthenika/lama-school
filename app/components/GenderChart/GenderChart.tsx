"use client"
import React, { useState, useEffect, useRef } from 'react';
import * as _ from 'lodash';
import {
  RadialBarChart,
  RadialBar,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  PolarAngleAxis,
} from 'recharts';
import { CiCircleMore } from 'react-icons/ci';


const data = [
  { name: 'Total', count: 1234, fill: '#FFFFFF' },
  { name: 'Males', count: 534, fill: '#C3EAFA' },
  { name: 'Females', count: 700, fill: '#FAE27C' },
];

const GenderChart = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full bg-white rounded-xl'>
      <div className='flex justify-between w-5/6 mt-4'>
        <h6 className='text-lg text-black font-semibold' >Students</h6>
        <span className='text-lg font-bold'><CiCircleMore color='gray' size={32}/></span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
          cx="50%"
          cy="50%"
          barSize={27} // thickness of each bar
          innerRadius={15}
          outerRadius={90}
          data={data}
          startAngle={180}
          endAngle={-180}
          dataKey="count"
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <RadialBar dataKey="count">
          </RadialBar>
        </RadialBarChart>
        </ResponsiveContainer>
      <div className='flex flex-row gap-16 mb-5'>
      <div className='flex flex-col'>
        <div className='h-5 w-5 bg-babyBlue rounded-full'></div>
        <h6 className='font-semibold text-lg'>{data[1].count}</h6>
        <span>Male</span>
      </div>
      <div className='flex flex-col mb-6'>
        <div className='h-5 w-5 bg-paleCanary rounded-full'></div>
        <h6 className='font-semibold text-lg'>{data[2].count}</h6>
        <span>Females</span>
      </div>
      </div>
    </div>
    
       
   
  );
};

export default GenderChart;
