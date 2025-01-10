import React from 'react'
type EventItemProps = {
    description: string;
    date: string;
    title: string;
};

const EventItem = ({ description, date, title }: EventItemProps) => {
    return (
        <>
            <div
                className='border-4 odd:border-babyBlue even:border-lavanda h-auto w-full bg-white rounded-xl px-2 py-4'
            >
                <div className='flex justify-between w-full px-3'>
                    <h6>{title}</h6>
                    <span className='text-gray-500'>{date}</span>
                </div>
                <div className='pl-3'>
                    <span className='text-gray-500'>{description}</span>
                </div>
            </div>
        </>
    );
};


export default EventItem
