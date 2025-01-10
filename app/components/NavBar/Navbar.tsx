"use client"
import React from 'react'
import { Input } from "@nextui-org/input";
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { FaBell, FaHome } from 'react-icons/fa';
const NavBar = () => {
    return (
        <div className='h-24 w-full bg-white flex justify-center md:justify-between'>
            <div className='hidden md:flex flex-row gap-3 cursor-pointer ml-4 items-center'>
                <Input
                    startContent={
                        <CiSearch></CiSearch>
                    }
                    className=" lg:block max-w-xs border-gray-600"
                    variant="bordered"
                    placeholder="Search..." type="text"
                    size='lg'
                />
            </div>

            <div className='flex flex-row gap-6 cursor-pointer h-12 items-center my-auto'>
                <div className='bg-white h-7 w-7 rounded-full '>
                <FaHome size="32px" color="gray"/>
                </div>
                <div className='bg-white h-7 w-7 rounded-full'>
                <FaBell size="32px" color="gray"/>
                </div>
                
                <div className='flex flex-col'>
                    <span>John Doe</span>
                    <span>Admin</span>
                </div>
                <Image alt=""  width={50} height={25} src="/avatar.png" className='rounded-full'></Image>


            </div>
        </div>
    )
}

export default NavBar
