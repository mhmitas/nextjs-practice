"use client"
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { ModeToggle } from "./ThemeController";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <h1 className="text-white text-2xl font-bold" >MyWebsite</h1>
                    </Link>
                    <div className="hidden md:flex md:items-center">
                        {navLinks.map(navlink => <Link key={navlink.path} href={navlink.path} className="text-white hover:bg-blue-700 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                            {navlink.name}
                        </Link>)}
                        <ModeToggle />
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-300 focus:outline-none text-2xl"
                        >
                            {!isOpen ? <AiOutlineMenu /> : <IoCloseOutline />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map(navlink => <Link key={navlink.path} href={navlink.path} className="block text-white hover:bg-blue-700 hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium">
                        {navlink.name}
                    </Link>)}
                    <div className="block text-white  px-3 py-2 rounded-md text-base font-medium">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
