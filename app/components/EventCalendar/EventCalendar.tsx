"use client"
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import '../../ui/globals.css'
import { CiCircleMore } from 'react-icons/ci';
import EventItem from '../EventItem/EventItems';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    title: "Annual Science Fair",
    date: "2024-03-15",
    description: "Join us for a day of innovation and creativity! Students will showcase their projects and experiments, and prizes will be awarded for the best presentations.",
  },
  {
    title: "Parent-Teacher Conference",
    date: "2024-04-10",
    description: "A great opportunity for parents to meet with teachers and discuss student progress, classroom activities, and future goals.",
  },
  {
    title: "Spring Music Concert",
    date: "2024-05-20",
    description: "Enjoy an evening of beautiful music performed by our talented students, featuring classical, jazz, and modern arrangements.",
  },
];

function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
<div className='w-full h-full flex flex-col gap-5 items-center justify-center my-6'>
      <Calendar onChange={onChange} value={value} locale='en-GB' />
      <div className='flex flex-row justify-between w-5/6 mt-4'>
        <h6 className='text-lg text-black font-semibold'>Events</h6>
        <span className='text-lg font-bold'><CiCircleMore color='gray' size={32} /></span>
      </div>
      <div className='h-auto flex flex-col justify-center items-center gap-6 w-5/6 mx-5'>
        {events.map(event => (
          <EventItem title={event.title} description={event.description} date={event.date}></EventItem>
        ))}
      </div>
    </div>
  );
}
export default EventCalendar
