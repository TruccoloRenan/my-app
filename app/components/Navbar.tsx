"use client"
import React, { useEffect, useState } from 'react';
import { PiKanban } from 'react-icons/pi';
import Link from 'next/link'
import { logout } from '../services/auth'
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const Navigate = useRouter();
    var currentUser: string | null = ""

    useEffect(() => {
        currentUser = localStorage.getItem("Usuario");
    },[])
    
    return (
        <>
        <div className='py-5 bg-transparent relative z-10 w-full text-white'>
            <div className='flex justify-between w-[90%] max-w-[1450px] mx-auto'>
                <Link href={"/"} className='flex gap-1 items-center text-2xl font-bold uppercase'>
                    <h1>My Kanban</h1>
                    <PiKanban />
                </Link>
                <div className='flex items-center gap-5 '>
                    <h1>Bem-vindo</h1>{currentUser && <span>currentUser</span>}
                </div>
                <div className='flex items-center gap-5'>
                    <button onClick={() => {
                        logout();
                        Navigate.push("/login");
                    }}>LogOut</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;