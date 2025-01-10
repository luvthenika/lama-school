"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const financeData = [
    {
      name: 'January',
      income: 5000,
      expense: 2000,
    },
    {
      name: 'February',
      income: 7000,
      expense: 3000,
    },
    {
      name: 'March',
      income: 6000,
      expense: 2500,
    },
    {
      name: 'April',
      income: 8000,
      expense: 4000,
    },
    {
      name: 'May',
      income: 9000,
      expense: 4500,
    },
  ];
  

const FinanceChart = () => {
  return (
    <div className='w-full h-full bg-white pt-5 pr-3 rounded-xl'>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={financeData}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="#FAE27C" strokeWidth={10} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="expense" stroke="#C3EAFA" strokeWidth={10}/>
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
