"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaHome, FaChalkboardTeacher, FaUserGraduate, FaUsers, FaSchool, FaBook, FaPenFancy, FaTasks, FaCalendarAlt, FaBell, FaEnvelope, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const menu = [
    {
        title: "HOME",
        items: [
            { label: "Home", icon: FaHome, href: "/home", color: "#0099FF", size: 32 }, // Rich sky blue
            { label: "Teachers", icon: FaChalkboardTeacher, href: "/teachers", color: "#FF8243", size: 32 }, // Vibrant orange
            { label: "Students", icon: FaUserGraduate, href: "/students", color: "#FFD700", size: 32 }, // Golden yellow
            { label: "Parents", icon: FaUsers, href: "/parents", color: "#00C49A", size: 32 }, // Bright teal green
            { label: "Classes", icon: FaSchool, href: "/classes", color: "#9C27B0", size: 32 }, // Deep purple
            { label: "Lessons", icon: FaBook, href: "/lessons", color: "#FF6B6B", size: 32 }, // Bright coral red
            { label: "Exams", icon: FaPenFancy, href: "/exams", color: "#00CC66", size: 32 }, // Vibrant green
            { label: "Assignments", icon: FaTasks, href: "/assignments", color: "#FF4500", size: 32 }, // Bold reddish orange
            { label: "Attendance", icon: FaCalendarAlt, href: "/attendance", color: "#7B68EE", size: 32 }, // Royal blue-purple
            { label: "Events", icon: FaBell, href: "/events", color: "#FF1493", size: 32 }, // Hot pink
            { label: "Messages", icon: FaEnvelope, href: "/messages", color: "#1E90FF", size: 32 }, // Dodger blue
            { label: "Announcements", icon: FaBell, href: "/announcements", color: "#DC143C", size: 32 }, // Crimson
        ],                   
        
    },
    {
        title: "OTHER",
        items: [
            { label: "Profile", icon: FaUserGraduate, href: "/profile", color: "#ffc107", size: 32 },
            { label: "Settings", icon: FaCogs, href: "/settings", color: "#007bff", size: 32 },
            { label: "Logout", icon: FaSignOutAlt, href: "/logout", color: "#dc3545", size: 32 },
        ]
    }
];

const Menu = () => {
    return (
        <div className='flex flex-col mt-10 items-center ml-6 h-full lg:items-start'>
            {menu.map((item, index) => (
                <div className='flex flex-col pb-10 bg-white w-full' key={index + 1}>
                    <span className='hidden lg:block text-xl text-gray-500'>{item.title}</span>
                    {item.items.map((m, i) => (
                        <Link href={m.href}
                            key={i + 1}
                            className='flex pt-6 pb-4 justify-center md:justify-start align-center gap-4 mr-4'>
                                <m.icon
                                    style={{
                                        color: m.color,
                                    }}
                                    className='w-8 h-8 md:h-10 md:w-10 lg:w-9 lg:h-9'

                                />

                            <span className='hidden lg:block text-lg font-medium text-gray-500'>{m.label}</span>
                        </Link>
                    ))}

                </div>
            ))}

        </div>
    )
}

export default Menu
