
"use client"
import React, { useState } from 'react'
import { CiCircleMore } from 'react-icons/ci';

const mockAnnouncements = [
    {
        id: 1,
        title: "Final Exam Schedule Released",
        dateOfPublishing: "2024-12-15",
        description: "The final exam schedule for the Fall 2024 semester is now available on the university portal.",
        type: "Academic", // Yellow for Academic events
        color: "paleCanary", // Tailwind variable
    },
    {
        id: 2,
        title: "Winter Break Dates Announced",
        dateOfPublishing: "2024-12-10",
        description: "The university will be closed from December 22nd to January 7th for winter break. Happy holidays!",
        type: "Informative", // Blue for general announcements
        color: "babyBlue", // Tailwind variable
    },

    {
        id: 3,
        title: "New Campus Cafeteria Menu",
        dateOfPublishing: "2024-12-01",
        description: "The cafeteria has introduced a new menu with vegan and gluten-free options. Check it out starting December 3rd!",
        type: "General", // Gentle green for general updates
        color: "softMint", // Updated from "gentleGreen"
    },
    {
        id: 4,
        title: "Registration for Spring 2025 Semester",
        dateOfPublishing: "2024-11-28",
        description: "Registration for the Spring 2025 semester opens on December 1st. Make sure to secure your classes early!",
        type: "Urgent", // Pastel pink for urgent announcements
        color: "softRose", // Updated from "pastelPink"
    },
];


const AnnouncementBoard = () => {
    const ids = mockAnnouncements.map((i) => i.id);
    const [text, switchText] = useState<number[]>(ids);
    const handleTextSwitch = (id : number) => {
        switchText((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    }
    return (
        <div className='flex flex-col gap-2 h-full w-full items-center mb-12'>
            <div className='flex flex-row justify-between w-5/6 mt-4'>
                <h6 className='text-lg text-black font-semibold'>Announcements</h6>
                <span className='text-lg font-bold'><CiCircleMore color='gray' size={32} /></span>
            </div>
            {mockAnnouncements.map((a, i) => (
                <>
                    <div
                        key={a.id}
                        className={`bg-${a.color} w-5/6 h-auto rounded-xl px-2 py-4 cursor-pointer`}
                    >
                        <div className='flex justify-between w-full px-3'>
                            <h6>{a.title}</h6>
                            <span className='text-gray-500'>{a.dateOfPublishing}</span>
                        </div>
                        <div className='pl-3' onClick={() => handleTextSwitch(a.id)}>
                            <span className={`text-gray-500 ${text.includes(a.id) ? 'line-clamp-1' : ''}`}>{a.description}</span>
                        </div>
                    </div>
                </>
            ))}

        </div>
    )
}

export default AnnouncementBoard
